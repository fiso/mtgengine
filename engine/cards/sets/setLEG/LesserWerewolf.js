"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LesserWerewolf extends Card {
  constructor(game) {
    super(game, "Lesser Werewolf", "Legends", "LEG");
  }
}

module.exports = LesserWerewolf;
