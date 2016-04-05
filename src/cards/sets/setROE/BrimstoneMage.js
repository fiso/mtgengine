"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrimstoneMage extends UnimplementedCard {
  constructor(game) {
    super(game, "Brimstone Mage", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = BrimstoneMage;
