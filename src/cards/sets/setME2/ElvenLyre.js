"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvenLyre extends UnimplementedCard {
  constructor (game) {
    super(game, "Elven Lyre", "Masters Edition II", "ME2");
  }
}

module.exports = ElvenLyre;
