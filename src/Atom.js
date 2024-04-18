const ChemicalElement = require('@voidvoxel/chemical-element');
const Position3D = require('@voidvoxel/position-3d');


class Atom {
    constructor (
        element,
        position
    ) {
        // Parameter `element`
        if (typeof element === 'number') {
            this._element = ChemicalElement.getBySymbol(element);
        } else if (typeof element === 'string') {
            this._element = ChemicalElement.getBySymbol(element);
        } else {
            this._element = ChemicalElement.getByAtomicNumber(1);
        }

        // Parameter `position`
        this._position = Position3D.from(position);
    }
}


module.exports = Atom;
