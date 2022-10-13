// 1) list of abstractions
const canSendMessage = self => ({
    sendMessage: () => console.log('send message:', self.message)
});

const checkIsValidPhone = self => ({
    isValid: () => console.log('valid phone', self.from)
});

// 2) create object composition
const personalEnterprise = (from, message, store) => {
    // 3) attributes
    const self = {
        from,
        message,
        store,
    };

    // 4) method
    const personalEnterpriseBehaviors = self => ({
        createCatalog: () => console.log('Catalog has created: ', self.store)
    });

    // 5) create object compostion
    return Object.assign(self, personalEnterpriseBehaviors(self), canSendMessage(self), checkIsValidPhone(self));
};

const pel = personalEnterprise('pengirim@gmail.com', 'hei produk baru nih', 'Dicoding Store');
pel.createCatalog(); // catalog has created: Dicoding Store
pel.sendMessage();
pel.isValid();