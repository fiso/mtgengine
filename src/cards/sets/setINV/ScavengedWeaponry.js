"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScavengedWeaponry extends UnimplementedCard {
  constructor (game) {
    super(game, "Scavenged Weaponry", "Invasion", "INV");
  }
}

module.exports = ScavengedWeaponry;
