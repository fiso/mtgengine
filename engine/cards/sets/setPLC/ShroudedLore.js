"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShroudedLore extends Card {
  constructor(game) {
    super(game, "Shrouded Lore", "Planar Chaos", "PLC");
  }
}

module.exports = ShroudedLore;
