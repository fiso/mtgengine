"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UlvenwaldObserver extends UnimplementedCard {
  constructor (game) {
    super(game, "Ulvenwald Observer", "Eldritch Moon", "EMN");
  }
}

module.exports = UlvenwaldObserver;
