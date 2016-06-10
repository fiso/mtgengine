"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SigiledBehemoth extends UnimplementedCard {
  constructor (game) {
    super(game, "Sigiled Behemoth", "Alara Reborn", "ARB");
  }
}

module.exports = SigiledBehemoth;
