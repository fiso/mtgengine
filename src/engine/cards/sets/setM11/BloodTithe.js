"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodTithe extends UnimplementedCard {
  constructor (game) {
    super(game, "Blood Tithe", "Magic 2011", "M11");
  }
}

module.exports = BloodTithe;
