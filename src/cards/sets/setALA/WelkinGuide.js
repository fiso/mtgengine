"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WelkinGuide extends UnimplementedCard {
  constructor (game) {
    super(game, "Welkin Guide", "Shards of Alara", "ALA");
  }
}

module.exports = WelkinGuide;
