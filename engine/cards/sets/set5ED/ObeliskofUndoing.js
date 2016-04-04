"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ObeliskofUndoingBase = require("../setATQ/ObeliskofUndoing.js");

class ObeliskofUndoing extends ObeliskofUndoingBase {
  constructor(game) {
    super(game, "Obelisk of Undoing", "Fifth Edition", "5ED");
  }
}

module.exports = ObeliskofUndoing;
