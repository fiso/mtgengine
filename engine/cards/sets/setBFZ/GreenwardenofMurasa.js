"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GreenwardenofMurasa extends Card {
  constructor(game) {
    super(game, "Greenwarden of Murasa", "Battle for Zendikar", "BFZ");
  }
}

module.exports = GreenwardenofMurasa;
