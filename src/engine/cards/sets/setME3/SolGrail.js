"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SolGrail extends UnimplementedCard {
  constructor (game) {
    super(game, "Sol Grail", "Masters Edition III", "ME3");
  }
}

module.exports = SolGrail;
