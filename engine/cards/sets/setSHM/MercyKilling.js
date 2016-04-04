"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MercyKilling extends Card {
  constructor(game) {
    super(game, "Mercy Killing", "Shadowmoor", "SHM");
  }
}

module.exports = MercyKilling;
