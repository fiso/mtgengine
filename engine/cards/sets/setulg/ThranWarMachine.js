"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThranWarMachine extends Card {
  constructor(game) {
    super(game, "Thran War Machine", "Urza's Legacy", "ULG");
  }
}

module.exports = ThranWarMachine;
