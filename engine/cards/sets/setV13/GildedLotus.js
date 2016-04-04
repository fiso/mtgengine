"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GildedLotus extends Card {
  constructor(game) {
    super(game, "Gilded Lotus", "From the Vault: Twenty", "V13");
  }
}

module.exports = GildedLotus;
