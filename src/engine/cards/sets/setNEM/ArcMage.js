"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcMage extends UnimplementedCard {
  constructor (game) {
    super(game, "Arc Mage", "Nemesis", "NEM");
  }
}

module.exports = ArcMage;
