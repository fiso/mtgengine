"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Treachery extends UnimplementedCard {
  constructor(game) {
    super(game, "Treachery", "Urza's Destiny", "UDS");
  }
}

module.exports = Treachery;
