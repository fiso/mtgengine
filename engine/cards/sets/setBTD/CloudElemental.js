"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CloudElemental extends Card {
  constructor(game) {
    super(game, "Cloud Elemental", "Beatdown Box Set", "BTD");
  }
}

module.exports = CloudElemental;
