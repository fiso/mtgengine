"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlipstreamEel extends UnimplementedCard {
  constructor(game) {
    super(game, "Slipstream Eel", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = SlipstreamEel;
