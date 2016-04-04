"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VeteranArmorer extends Card {
  constructor(game) {
    super(game, "Veteran Armorer", "Modern Masters", "MMA");
  }
}

module.exports = VeteranArmorer;
