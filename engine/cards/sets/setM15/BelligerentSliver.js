"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BelligerentSliver extends Card {
  constructor(game) {
    super(game, "Belligerent Sliver", "Magic 2015 Core Set", "M15");
  }
}

module.exports = BelligerentSliver;
