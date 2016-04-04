"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThreeTragedies extends Card {
  constructor(game) {
    super(game, "Three Tragedies", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = ThreeTragedies;
