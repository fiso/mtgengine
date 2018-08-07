"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StreetWraith extends UnimplementedCard {
  constructor (game) {
    super(game, "Street Wraith", "Masters 25", "A25");
  }
}

module.exports = StreetWraith;
