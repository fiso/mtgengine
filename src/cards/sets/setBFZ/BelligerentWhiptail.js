"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BelligerentWhiptail extends UnimplementedCard {
  constructor(game) {
    super(game, "Belligerent Whiptail", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BelligerentWhiptail;
