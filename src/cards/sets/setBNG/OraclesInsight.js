"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OraclesInsight extends UnimplementedCard {
  constructor (game) {
    super(game, "Oracle's Insight", "Born of the Gods", "BNG");
  }
}

module.exports = OraclesInsight;
