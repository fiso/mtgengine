"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilentSentinel extends UnimplementedCard {
  constructor (game) {
    super(game, "Silent Sentinel", "Commander 2018", "C18");
  }
}

module.exports = SilentSentinel;
