"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BaneofBalaGed extends UnimplementedCard {
  constructor (game) {
    super(game, "Bane of Bala Ged", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BaneofBalaGed;
