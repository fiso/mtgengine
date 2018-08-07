"use strict";
const Constants = require ("../../../Constants");
const PlateauBase = require("../setVMA/Plateau");

class Plateau extends PlateauBase {
  constructor (game) {
    super(game, "Plateau", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = Plateau;
