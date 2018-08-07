"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuicksilverAmulet extends UnimplementedCard {
  constructor (game) {
    super(game, "Quicksilver Amulet", "Explorers of Ixalan", "E02");
  }
}

module.exports = QuicksilverAmulet;
