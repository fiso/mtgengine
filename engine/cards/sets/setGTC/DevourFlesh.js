"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DevourFlesh extends Card {
  constructor(game) {
    super(game, "Devour Flesh", "Gatecrash", "GTC");
  }
}

module.exports = DevourFlesh;
