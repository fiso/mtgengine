"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Combust extends UnimplementedCard {
  constructor (game) {
    super(game, "Combust", "Magic 2011", "M11");
  }
}

module.exports = Combust;
