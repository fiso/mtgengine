"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TreacherousWerewolf extends Card {
  constructor(game) {
    super(game, "Treacherous Werewolf", "Judgment", "JUD");
  }
}

module.exports = TreacherousWerewolf;
