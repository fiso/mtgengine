"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sunlance extends UnimplementedCard {
  constructor (game) {
    super(game, "Sunlance", "Modern Masters 2015", "MM2");
  }
}

module.exports = Sunlance;
