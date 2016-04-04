"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FabledHero extends Card {
  constructor(game) {
    super(game, "Fabled Hero", "Theros", "THS");
  }
}

module.exports = FabledHero;
