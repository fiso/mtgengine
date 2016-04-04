"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DemonsJester extends Card {
  constructor(game) {
    super(game, "Demon's Jester", "Dissension", "DIS");
  }
}

module.exports = DemonsJester;
