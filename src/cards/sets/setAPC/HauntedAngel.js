"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HauntedAngel extends UnimplementedCard {
  constructor(game) {
    super(game, "Haunted Angel", "Apocalypse", "APC");
  }
}

module.exports = HauntedAngel;
