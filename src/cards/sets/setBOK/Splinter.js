"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Splinter extends UnimplementedCard {
  constructor (game) {
    super(game, "Splinter", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = Splinter;
