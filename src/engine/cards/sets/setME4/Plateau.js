"use strict";
const Constants = require ("../../../Constants");
const PlateauBase = require("../setVMA/Plateau");

class Plateau extends PlateauBase {
  constructor (game) {
    super(game, "Plateau", "Masters Edition IV", "ME4");
  }
}

module.exports = Plateau;
