"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrownofFlames extends Card {
  constructor(game) {
    super(game, "Crown of Flames", "Invasion", "INV");
  }
}

module.exports = CrownofFlames;
