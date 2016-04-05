"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Spincrusher extends UnimplementedCard {
  constructor(game) {
    super(game, "Spincrusher", "Darksteel", "DST");
  }
}

module.exports = Spincrusher;
