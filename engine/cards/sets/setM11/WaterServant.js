"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WaterServant extends UnimplementedCard {
  constructor(game) {
    super(game, "Water Servant", "Magic 2011", "M11");
  }
}

module.exports = WaterServant;
