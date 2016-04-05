"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChannelHarm extends UnimplementedCard {
  constructor(game) {
    super(game, "Channel Harm", "Fate Reforged", "FRF");
  }
}

module.exports = ChannelHarm;
