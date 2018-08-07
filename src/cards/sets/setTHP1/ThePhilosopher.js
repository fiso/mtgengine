"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThePhilosopher extends UnimplementedCard {
  constructor (game) {
    super(game, "The Philosopher", "Theros Hero's Path", "THP1");
  }
}

module.exports = ThePhilosopher;
