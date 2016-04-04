"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BelligerentWhiptail extends Card {
  constructor(game) {
    super(game, "Belligerent Whiptail", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BelligerentWhiptail;
