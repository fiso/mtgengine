"use strict";
const Constants = require ("../../../Constants");
const PlateauBase = require("../setCED/Plateau");

class Plateau extends PlateauBase {
  constructor (game) {
    super(game, "Plateau", "Unlimited Edition", "2ED");
  }
}

module.exports = Plateau;
