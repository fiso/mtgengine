"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Humming extends UnimplementedCard {
  constructor (game) {
    super(game, "Humming-", "Unstable", "UST");
  }
}

module.exports = Humming;
