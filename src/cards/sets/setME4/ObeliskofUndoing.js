"use strict";
const Constants = require ("../../../Constants");
const ObeliskofUndoingBase = require("../setATQ/ObeliskofUndoing");

class ObeliskofUndoing extends ObeliskofUndoingBase {
  constructor (game) {
    super(game, "Obelisk of Undoing", "Masters Edition IV", "ME4");
  }
}

module.exports = ObeliskofUndoing;
