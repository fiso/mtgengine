"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuicksilverAmulet extends UnimplementedCard {
  constructor (game) {
    super(game, "Quicksilver Amulet", "Magic 2012", "M12");
  }
}

module.exports = QuicksilverAmulet;
