"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TreasureNabber extends UnimplementedCard {
  constructor (game) {
    super(game, "Treasure Nabber", "Commander 2018", "C18");
  }
}

module.exports = TreasureNabber;
