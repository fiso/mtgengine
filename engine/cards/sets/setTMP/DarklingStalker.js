"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DarklingStalker extends Card {
  constructor(game) {
    super(game, "Darkling Stalker", "Tempest", "TMP");
  }
}

module.exports = DarklingStalker;
