"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrimsonMage extends UnimplementedCard {
  constructor(game) {
    super(game, "Crimson Mage", "Magic 2012", "M12");
  }
}

module.exports = CrimsonMage;
