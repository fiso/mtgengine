"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BasandraBattleSeraph extends Card {
  constructor(game) {
    super(game, "Basandra, Battle Seraph", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = BasandraBattleSeraph;
