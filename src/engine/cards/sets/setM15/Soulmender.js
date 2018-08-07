"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Soulmender extends UnimplementedCard {
  constructor (game) {
    super(game, "Soulmender", "Magic 2015", "M15");
  }
}

module.exports = Soulmender;
