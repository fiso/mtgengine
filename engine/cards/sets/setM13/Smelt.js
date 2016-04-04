"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Smelt extends UnimplementedCard {
  constructor(game) {
    super(game, "Smelt", "Magic 2013", "M13");
  }
}

module.exports = Smelt;
