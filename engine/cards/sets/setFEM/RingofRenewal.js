"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RingofRenewal extends Card {
  constructor(game) {
    super(game, "Ring of Renewal", "Fallen Empires", "FEM");
  }
}

module.exports = RingofRenewal;
