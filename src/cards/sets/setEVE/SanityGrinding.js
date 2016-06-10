"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SanityGrinding extends UnimplementedCard {
  constructor (game) {
    super(game, "Sanity Grinding", "Eventide", "EVE");
  }
}

module.exports = SanityGrinding;
