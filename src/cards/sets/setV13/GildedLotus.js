"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GildedLotus extends UnimplementedCard {
  constructor (game) {
    super(game, "Gilded Lotus", "From the Vault: Twenty", "V13");
  }
}

module.exports = GildedLotus;
