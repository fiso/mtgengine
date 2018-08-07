"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MistIntruder extends UnimplementedCard {
  constructor (game) {
    super(game, "Mist Intruder", "Battle for Zendikar", "BFZ");
  }
}

module.exports = MistIntruder;
