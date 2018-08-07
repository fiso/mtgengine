"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RegalBehemoth extends UnimplementedCard {
  constructor (game) {
    super(game, "Regal Behemoth", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = RegalBehemoth;
