"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MidlifeUpgrade extends UnimplementedCard {
  constructor (game) {
    super(game, "Midlife Upgrade", "Unstable", "UST");
  }
}

module.exports = MidlifeUpgrade;
