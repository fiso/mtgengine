"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilverWyvern extends UnimplementedCard {
  constructor (game) {
    super(game, "Silver Wyvern", "Tempest Remastered", "TPR");
  }
}

module.exports = SilverWyvern;
