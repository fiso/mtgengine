"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AmuletofKroog extends UnimplementedCard {
  constructor (game) {
    super(game, "Amulet of Kroog", "Masters Edition IV", "ME4");
  }
}

module.exports = AmuletofKroog;
