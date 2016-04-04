"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JettingGlasskite extends Card {
  constructor(game) {
    super(game, "Jetting Glasskite", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = JettingGlasskite;
