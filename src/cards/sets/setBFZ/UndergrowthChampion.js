"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UndergrowthChampion extends UnimplementedCard {
  constructor (game) {
    super(game, "Undergrowth Champion", "Battle for Zendikar", "BFZ");
  }
}

module.exports = UndergrowthChampion;
