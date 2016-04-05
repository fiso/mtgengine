"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlabasterMage extends UnimplementedCard {
  constructor(game) {
    super(game, "Alabaster Mage", "Magic 2012", "M12");
  }
}

module.exports = AlabasterMage;
