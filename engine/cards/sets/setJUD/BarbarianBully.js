"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BarbarianBully extends Card {
  constructor(game) {
    super(game, "Barbarian Bully", "Judgment", "JUD");
  }
}

module.exports = BarbarianBully;
