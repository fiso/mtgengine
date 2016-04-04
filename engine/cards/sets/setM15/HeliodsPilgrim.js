"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeliodsPilgrim extends Card {
  constructor(game) {
    super(game, "Heliod's Pilgrim", "Magic 2015 Core Set", "M15");
  }
}

module.exports = HeliodsPilgrim;
