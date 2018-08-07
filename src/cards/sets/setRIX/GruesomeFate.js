"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GruesomeFate extends UnimplementedCard {
  constructor (game) {
    super(game, "Gruesome Fate", "Rivals of Ixalan", "RIX");
  }
}

module.exports = GruesomeFate;
