"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LegionLieutenant extends UnimplementedCard {
  constructor (game) {
    super(game, "Legion Lieutenant", "Rivals of Ixalan", "RIX");
  }
}

module.exports = LegionLieutenant;
