"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Steamfloggery extends UnimplementedCard {
  constructor (game) {
    super(game, "Steamfloggery", "Unstable", "UST");
  }
}

module.exports = Steamfloggery;
