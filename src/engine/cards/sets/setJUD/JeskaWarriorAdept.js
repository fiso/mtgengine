"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JeskaWarriorAdept extends UnimplementedCard {
  constructor (game) {
    super(game, "Jeska, Warrior Adept", "Judgment", "JUD");
  }
}

module.exports = JeskaWarriorAdept;
