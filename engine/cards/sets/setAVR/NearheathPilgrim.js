"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NearheathPilgrim extends Card {
  constructor(game) {
    super(game, "Nearheath Pilgrim", "Avacyn Restored", "AVR");
  }
}

module.exports = NearheathPilgrim;
