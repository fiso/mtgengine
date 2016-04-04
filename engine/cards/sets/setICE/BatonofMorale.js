"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BatonofMorale extends Card {
  constructor(game) {
    super(game, "Baton of Morale", "Ice Age", "ICE");
  }
}

module.exports = BatonofMorale;
