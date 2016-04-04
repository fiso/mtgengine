"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SafeholdDuo extends UnimplementedCard {
  constructor(game) {
    super(game, "Safehold Duo", "Shadowmoor", "SHM");
  }
}

module.exports = SafeholdDuo;
