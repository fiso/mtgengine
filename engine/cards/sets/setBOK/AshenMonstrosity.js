"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AshenMonstrosity extends Card {
  constructor(game) {
    super(game, "Ashen Monstrosity", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = AshenMonstrosity;
