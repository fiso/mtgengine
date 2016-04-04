"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StalkerHag extends Card {
  constructor(game) {
    super(game, "Stalker Hag", "Eventide", "EVE");
  }
}

module.exports = StalkerHag;
