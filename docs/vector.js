/**
 * Implementation of a Vector class
 */
var vector = {
    // Underscore represents the fact that these variables are supposed to be private
    _x: 1,
    _y: 0,

    create: function (x, y) {
        var obj = Object.create(this);
        obj.setX(x);
        obj.setY(y);
        return obj;
    },

    setX: function (value) {
        this._x = value;
    },

    getX: function () {
        return this._x;
    },

    setY: function (value) {
        this._y = value;
    },

    getY: function () {
        return this._y;
    },

    setAngle: function (angle) {
        var length = this.getLength();
        this._x = Math.cos(angle) * length;
        this._y = Math.sin(angle) * length;
    },

    getAngle: function () {
        return Math.atan2(this._y, this._x);
    },

    setLength: function (length) {
        var angle = this.getAngle();
        this._x = Math.cos(angle) * length;
        this._y = Math.sin(angle) * length;
    },

    getLength: function () {
        // Pythagorean Theorem
        return Math.sqrt(this._x * this._x + this._y * this._y);
    },

    add: function (v2) {
        return vector.create(this._x + v2.getX(), this._y + v2.getY());
    },

    subtract: function (v2) {
        return vector.create(this._x - v2.getX(), this._y - v2.getY());
    },

    /**
     * Takes a scalar value (real number), not a vector. Results in vector with greater magnitude.
     * Multiplying vectors with vectors is different. Dot-product, cross-procudt.
     * @param {} val 
     * @returns vector
     */
    multiply: function(val) {
        return vector.create(this._x * val, this._y * val);
    },

    /**
     * Takes a scalar value (real number), not a vector. Results in vector with modified magnitude.
     * Dividing vector by vector is done in a different function.
     * @param {} val 
     * @returns vector
     */
    divide: function(val) {
        return vector.create(this._x / val, this._y / val);
    }, 

    // The following 4 functions do the same as teh top 4, 
    // except that they modify the vector upon which they 
    // are called.

    addTo: function(v2) {
        this._x += v2.getX();
        this._y += v2.getY();
    },

    subtractFrom: function(v2) {
        this._x -= v2.getX();
        this._y -= v2.getY();
    },

    multiplyBy: function(val) {
        this._x *= val;
        this._y *= val;
    },

    divideBy: function(val) {
        this._x /= val;
        this._y /= val;
    }
}