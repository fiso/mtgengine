"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChasmGuide extends UnimplementedCard {
  constructor (game) {
    super(game, "Chasm Guide", "Battle for Zendikar", "BFZ");
  }
}

module.exports = ChasmGuide;
