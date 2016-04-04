"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PiranhaMarsh extends Card {
  constructor(game) {
    super(game, "Piranha Marsh", "Zendikar", "ZEN");
  }
}

module.exports = PiranhaMarsh;
