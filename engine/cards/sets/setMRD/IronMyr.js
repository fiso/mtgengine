"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IronMyr extends Card {
  constructor(game) {
    super(game, "Iron Myr", "Mirrodin", "MRD");
  }
}

module.exports = IronMyr;
