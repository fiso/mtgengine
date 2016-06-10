"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilentSentinel extends UnimplementedCard {
  constructor (game) {
    super(game, "Silent Sentinel", "Born of the Gods", "BNG");
  }
}

module.exports = SilentSentinel;
