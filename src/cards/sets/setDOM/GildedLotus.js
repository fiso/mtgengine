"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GildedLotus extends UnimplementedCard {
  constructor (game) {
    super(game, "Gilded Lotus", "Dominaria", "DOM");
  }
}

module.exports = GildedLotus;
