"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MysticRestraints extends Card {
  constructor(game) {
    super(game, "Mystic Restraints", "Champions of Kamigawa", "CHK");
  }
}

module.exports = MysticRestraints;
