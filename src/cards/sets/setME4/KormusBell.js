"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KormusBell extends UnimplementedCard {
  constructor (game) {
    super(game, "Kormus Bell", "Masters Edition IV", "ME4");
  }
}

module.exports = KormusBell;
