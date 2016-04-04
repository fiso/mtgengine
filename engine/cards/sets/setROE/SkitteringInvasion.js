"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkitteringInvasion extends Card {
  constructor(game) {
    super(game, "Skittering Invasion", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SkitteringInvasion;
