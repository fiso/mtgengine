"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FrontlineMedic extends Card {
  constructor(game) {
    super(game, "Frontline Medic", "Gatecrash", "GTC");
  }
}

module.exports = FrontlineMedic;
