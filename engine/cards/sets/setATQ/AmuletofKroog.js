"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AmuletofKroog extends Card {
  constructor(game) {
    super(game, "Amulet of Kroog", "Antiquities", "ATQ");
  }
}

module.exports = AmuletofKroog;
