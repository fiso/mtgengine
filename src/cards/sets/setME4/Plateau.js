"use strict";
const Constants = require ("../../../Constants");
const PlateauBase = require("../setCED/Plateau");

class Plateau extends PlateauBase {
  constructor(game) {
    super(game, "Plateau", "Masters Edition IV", "ME4");
  }
}

module.exports = Plateau;
