"use strict";
const Constants = require ("../../../Constants");
const FoilBase = require("../setDDF/Foil");

class Foil extends FoilBase {
  constructor (game) {
    super(game, "Foil", "Prophecy", "PCY");
  }
}

module.exports = Foil;
