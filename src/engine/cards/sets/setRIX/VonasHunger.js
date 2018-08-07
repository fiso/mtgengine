"use strict";
const Constants = require ("../../../Constants");
const VonasHungerBase = require("../setPRIX/VonasHunger");

class VonasHunger extends VonasHungerBase {
  constructor (game) {
    super(game, "Vona's Hunger", "Rivals of Ixalan", "RIX");
  }
}

module.exports = VonasHunger;
