"use strict";
const Constants = require ("../../../Constants");
const IreShamanBase = require("../setA25/IreShaman");

class IreShaman extends IreShamanBase {
  constructor (game) {
    super(game, "Ire Shaman", "Dragons of Tarkir", "DTK");
  }
}

module.exports = IreShaman;
