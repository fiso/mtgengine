"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RaidBombardment extends Card {
  constructor(game) {
    super(game, "Raid Bombardment", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = RaidBombardment;
