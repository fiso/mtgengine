"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlourishingDefenses extends UnimplementedCard {
  constructor (game) {
    super(game, "Flourishing Defenses", "Shadowmoor", "SHM");
  }
}

module.exports = FlourishingDefenses;
