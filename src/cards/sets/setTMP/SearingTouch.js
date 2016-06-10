"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SearingTouch extends UnimplementedCard {
  constructor (game) {
    super(game, "Searing Touch", "Tempest", "TMP");
  }
}

module.exports = SearingTouch;
