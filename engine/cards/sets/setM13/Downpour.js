"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Downpour extends UnimplementedCard {
  constructor(game) {
    super(game, "Downpour", "Magic 2013", "M13");
  }
}

module.exports = Downpour;
