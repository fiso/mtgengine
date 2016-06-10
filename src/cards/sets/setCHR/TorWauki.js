"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TorWauki extends UnimplementedCard {
  constructor (game) {
    super(game, "Tor Wauki", "Chronicles", "CHR");
  }
}

module.exports = TorWauki;
