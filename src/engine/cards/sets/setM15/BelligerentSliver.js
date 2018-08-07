"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BelligerentSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Belligerent Sliver", "Magic 2015", "M15");
  }
}

module.exports = BelligerentSliver;
