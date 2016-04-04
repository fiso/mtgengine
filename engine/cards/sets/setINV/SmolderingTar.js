"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SmolderingTar extends Card {
  constructor(game) {
    super(game, "Smoldering Tar", "Invasion", "INV");
  }
}

module.exports = SmolderingTar;
