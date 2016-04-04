"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FoilBase = require("../setDDF/Foil.js");

class Foil extends FoilBase {
  constructor(game) {
    super(game, "Foil", "Prophecy", "PCY");
  }
}

module.exports = Foil;
