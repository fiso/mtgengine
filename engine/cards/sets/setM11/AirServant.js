"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AirServant extends UnimplementedCard {
  constructor(game) {
    super(game, "Air Servant", "Magic 2011", "M11");
  }
}

module.exports = AirServant;
