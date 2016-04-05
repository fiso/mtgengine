"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OnduChampion extends UnimplementedCard {
  constructor(game) {
    super(game, "Ondu Champion", "Battle for Zendikar", "BFZ");
  }
}

module.exports = OnduChampion;
