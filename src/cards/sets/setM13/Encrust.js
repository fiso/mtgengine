"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Encrust extends UnimplementedCard {
  constructor(game) {
    super(game, "Encrust", "Magic 2013", "M13");
  }
}

module.exports = Encrust;
