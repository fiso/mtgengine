"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Stun extends Card {
  constructor(game) {
    super(game, "Stun", "Invasion", "INV");
  }
}

module.exports = Stun;
