"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Watchdog extends Card {
  constructor(game) {
    super(game, "Watchdog", "Tempest", "TMP");
  }
}

module.exports = Watchdog;
