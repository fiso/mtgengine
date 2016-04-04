"use strict";
const Constants = require ("../../../Constants");
const ObeliskofUndoingBase = require("../setATQ/ObeliskofUndoing");

class ObeliskofUndoing extends ObeliskofUndoingBase {
  constructor(game) {
    super(game, "Obelisk of Undoing", "Fifth Edition", "5ED");
  }
}

module.exports = ObeliskofUndoing;
