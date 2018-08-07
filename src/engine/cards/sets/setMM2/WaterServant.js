"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WaterServant extends UnimplementedCard {
  constructor (game) {
    super(game, "Water Servant", "Modern Masters 2015", "MM2");
  }
}

module.exports = WaterServant;
