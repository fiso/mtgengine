"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DwarvenDriller extends Card {
  constructor(game) {
    super(game, "Dwarven Driller", "Judgment", "JUD");
  }
}

module.exports = DwarvenDriller;
