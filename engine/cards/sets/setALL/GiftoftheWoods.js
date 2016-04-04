"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiftoftheWoods extends UnimplementedCard {
  constructor(game) {
    super(game, "Gift of the Woods", "Alliances", "ALL");
  }
}

module.exports = GiftoftheWoods;
