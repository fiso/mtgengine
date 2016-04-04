"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LavaBlister extends Card {
  constructor(game) {
    super(game, "Lava Blister", "Odyssey", "ODY");
  }
}

module.exports = LavaBlister;
