"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TreacherousVampire extends Card {
  constructor(game) {
    super(game, "Treacherous Vampire", "Judgment", "JUD");
  }
}

module.exports = TreacherousVampire;
