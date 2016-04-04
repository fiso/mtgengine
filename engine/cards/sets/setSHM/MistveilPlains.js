"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MistveilPlains extends Card {
  constructor(game) {
    super(game, "Mistveil Plains", "Shadowmoor", "SHM");
  }
}

module.exports = MistveilPlains;
