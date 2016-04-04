"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodTribute extends UnimplementedCard {
  constructor(game) {
    super(game, "Blood Tribute", "Zendikar", "ZEN");
  }
}

module.exports = BloodTribute;
