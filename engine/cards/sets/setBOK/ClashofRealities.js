"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ClashofRealities extends Card {
  constructor(game) {
    super(game, "Clash of Realities", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = ClashofRealities;
