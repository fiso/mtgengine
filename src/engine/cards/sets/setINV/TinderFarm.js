"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TinderFarm extends UnimplementedCard {
  constructor (game) {
    super(game, "Tinder Farm", "Invasion", "INV");
  }
}

module.exports = TinderFarm;
