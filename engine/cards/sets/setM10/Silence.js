"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Silence extends UnimplementedCard {
  constructor(game) {
    super(game, "Silence", "Magic 2010", "M10");
  }
}

module.exports = Silence;
