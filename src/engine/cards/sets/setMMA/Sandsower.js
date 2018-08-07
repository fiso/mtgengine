"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sandsower extends UnimplementedCard {
  constructor (game) {
    super(game, "Sandsower", "Modern Masters", "MMA");
  }
}

module.exports = Sandsower;
