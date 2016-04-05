"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AmuletofKroog extends UnimplementedCard {
  constructor(game) {
    super(game, "Amulet of Kroog", "Antiquities", "ATQ");
  }
}

module.exports = AmuletofKroog;
