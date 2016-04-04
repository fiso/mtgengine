"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RiptideDirector extends Card {
  constructor(game) {
    super(game, "Riptide Director", "Legions", "LGN");
  }
}

module.exports = RiptideDirector;
