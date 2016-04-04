"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Telethopter extends Card {
  constructor(game) {
    super(game, "Telethopter", "Tempest", "TMP");
  }
}

module.exports = Telethopter;
