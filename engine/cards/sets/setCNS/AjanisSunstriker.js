"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AjanisSunstrikerBase = require("../setM13/AjanisSunstriker.js");

class AjanisSunstriker extends AjanisSunstrikerBase {
  constructor(game) {
    super(game, "Ajani's Sunstriker", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = AjanisSunstriker;
