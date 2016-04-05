"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HornetSting extends UnimplementedCard {
  constructor(game) {
    super(game, "Hornet Sting", "Magic 2011", "M11");
  }
}

module.exports = HornetSting;
