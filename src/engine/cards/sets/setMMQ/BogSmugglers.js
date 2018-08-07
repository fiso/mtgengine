"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BogSmugglers extends UnimplementedCard {
  constructor (game) {
    super(game, "Bog Smugglers", "Mercadian Masques", "MMQ");
  }
}

module.exports = BogSmugglers;
