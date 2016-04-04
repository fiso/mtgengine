"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScavengedWeaponry extends Card {
  constructor(game) {
    super(game, "Scavenged Weaponry", "Invasion", "INV");
  }
}

module.exports = ScavengedWeaponry;
