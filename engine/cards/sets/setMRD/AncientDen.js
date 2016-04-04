"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AncientDen extends Card {
  constructor(game) {
    super(game, "Ancient Den", "Mirrodin", "MRD");
  }
}

module.exports = AncientDen;
