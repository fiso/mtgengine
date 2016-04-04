"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Heartstone extends UnimplementedCard {
  constructor(game) {
    super(game, "Heartstone", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = Heartstone;
