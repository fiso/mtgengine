"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TorWauki extends UnimplementedCard {
  constructor (game) {
    super(game, "Tor Wauki", "Masters Edition III", "ME3");
  }
}

module.exports = TorWauki;
