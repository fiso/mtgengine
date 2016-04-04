"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DaringSkyjek extends Card {
  constructor(game) {
    super(game, "Daring Skyjek", "Gatecrash", "GTC");
  }
}

module.exports = DaringSkyjek;
