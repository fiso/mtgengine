"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeepReconnaissance extends Card {
  constructor(game) {
    super(game, "Deep Reconnaissance", "Odyssey", "ODY");
  }
}

module.exports = DeepReconnaissance;
