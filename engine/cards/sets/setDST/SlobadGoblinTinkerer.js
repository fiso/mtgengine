"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SlobadGoblinTinkerer extends Card {
  constructor(game) {
    super(game, "Slobad, Goblin Tinkerer", "Darksteel", "DST");
  }
}

module.exports = SlobadGoblinTinkerer;
