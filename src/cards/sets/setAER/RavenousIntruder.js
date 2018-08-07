"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RavenousIntruder extends UnimplementedCard {
  constructor (game) {
    super(game, "Ravenous Intruder", "Aether Revolt", "AER");
  }
}

module.exports = RavenousIntruder;
