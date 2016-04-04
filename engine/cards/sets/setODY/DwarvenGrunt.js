"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DwarvenGrunt extends Card {
  constructor(game) {
    super(game, "Dwarven Grunt", "Odyssey", "ODY");
  }
}

module.exports = DwarvenGrunt;
