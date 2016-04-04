"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JeskaWarriorAdept extends Card {
  constructor(game) {
    super(game, "Jeska, Warrior Adept", "Judgment", "JUD");
  }
}

module.exports = JeskaWarriorAdept;
