"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodHost extends UnimplementedCard {
  constructor (game) {
    super(game, "Blood Host", "Magic 2015 Core Set", "M15");
  }
}

module.exports = BloodHost;
