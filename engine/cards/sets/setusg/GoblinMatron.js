"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinMatronBase = require("../setATH/GoblinMatron.js");

class GoblinMatron extends GoblinMatronBase {
  constructor(game) {
    super(game, "Goblin Matron", "Urza's Saga", "USG");
  }
}

module.exports = GoblinMatron;
