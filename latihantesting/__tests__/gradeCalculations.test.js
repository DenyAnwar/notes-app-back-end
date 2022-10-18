const { averageExams, isStudentPassExam } = require('../gradeCalculations');

describe('grade calculations', () => {
    test('it should return exact average', () => {
        const listValueofExams = [80, 100, 100, 80];
        expect(averageExams(listValueofExams)).toEqual(90); 
    });

    test('it should return exam passed status', () => {
        const listValueofExams = [80, 100, 100, 80];
        expect(isStudentPassExam(listValueofExams, 'Budi')).toEqual(true);
    });

    test('it should return exam field status', () => {
        const listValueofExams = [50, 30, 70, 80];
        expect(isStudentPassExam(listValueofExams, 'Andi')).toEqual(false);
    });
    
    test('it should handle non-number', () => {
        const listValueofExams = [80, 'a', '100', 90];
        expect(() => averageExams(listValueofExams)).toThrow();
    });
});