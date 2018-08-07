"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sandskin extends UnimplementedCard {
  constructor (game) {
    super(game, "Sandskin", "Onslaught", "ONS");
  }
}

module.exports = Sandskin;
