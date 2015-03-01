var defaultAssign = require('../default-assign.js');
describe('default-assign', function() {
    var t1 = defaultAssign({foo: 0, bar: 1}, {bar: 2, baz: 2});
    it('should copy properties to first argument.', function() {
        expect(t1.foo).toBe(0);
        expect(t1.baz).toBe(2);
    });
    it('should copy undefined properties only.', function() {
        expect(t1.bar).toBe(1);
    });
    
    var t2 = defaultAssign({foo: 0, boo: 1}, {bar: 2}, {baz: 3});
    it('should copy from multiple sources.', function() {
        expect(t2.bar).toBe(2);
        expect(t2.baz).toBe(3);
    });
    
    var t3 = defaultAssign({foo: 0, bar: {barA: 1, barB: 2}}, {bar: {barA: 2, barC: 3}});
    it('should copy recursively, without overwriting.', function() {
        expect(t3.bar.barA).toBe(1);
        expect(t3.bar.barB).toBe(2);
        expect(t3.bar.barC).toBe(3);
    });
    
    var t4 = defaultAssign({foo: 0, bar: 1}, null, {bar: 2, baz: 2}, undefined);
    it('should ignore null and undefined sources.', function() {
        expect(t4.foo).toBe(0);
        expect(t4.bar).toBe(1);
        expect(t4.baz).toBe(2);
    });
});