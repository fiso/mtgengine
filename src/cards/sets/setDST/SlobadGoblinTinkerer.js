"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlobadGoblinTinkerer extends UnimplementedCard {
  constructor (game) {
    super(game, "Slobad, Goblin Tinkerer", "Darksteel", "DST");
  }
}

module.exports = SlobadGoblinTinkerer;
