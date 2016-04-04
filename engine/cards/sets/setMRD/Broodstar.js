"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Broodstar extends Card {
  constructor(game) {
    super(game, "Broodstar", "Mirrodin", "MRD");
  }
}

module.exports = Broodstar;
