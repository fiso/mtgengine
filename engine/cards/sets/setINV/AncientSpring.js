"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AncientSpring extends Card {
  constructor(game) {
    super(game, "Ancient Spring", "Invasion", "INV");
  }
}

module.exports = AncientSpring;
