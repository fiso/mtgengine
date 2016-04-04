"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Overblaze extends UnimplementedCard {
  constructor(game) {
    super(game, "Overblaze", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = Overblaze;
