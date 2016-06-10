"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AkkiBlizzardHerder extends UnimplementedCard {
  constructor (game) {
    super(game, "Akki Blizzard-Herder", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = AkkiBlizzardHerder;
