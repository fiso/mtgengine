"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GreatTeachersDecree extends Card {
  constructor(game) {
    super(game, "Great Teacher's Decree", "Dragons of Tarkir", "DTK");
  }
}

module.exports = GreatTeachersDecree;
