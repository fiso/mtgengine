"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reshape extends UnimplementedCard {
  constructor (game) {
    super(game, "Reshape", "Darksteel", "DST");
  }
}

module.exports = Reshape;
