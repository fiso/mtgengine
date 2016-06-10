"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TowerGeist extends UnimplementedCard {
  constructor (game) {
    super(game, "Tower Geist", "Dark Ascension", "DKA");
  }
}

module.exports = TowerGeist;
