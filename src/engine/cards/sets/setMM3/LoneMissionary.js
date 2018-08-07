"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoneMissionary extends UnimplementedCard {
  constructor (game) {
    super(game, "Lone Missionary", "Modern Masters 2017", "MM3");
  }
}

module.exports = LoneMissionary;
