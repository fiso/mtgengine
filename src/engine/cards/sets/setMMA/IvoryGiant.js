"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IvoryGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Ivory Giant", "Modern Masters", "MMA");
  }
}

module.exports = IvoryGiant;
