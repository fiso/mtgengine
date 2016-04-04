"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VeilstoneAmulet extends Card {
  constructor(game) {
    super(game, "Veilstone Amulet", "Future Sight", "FUT");
  }
}

module.exports = VeilstoneAmulet;
