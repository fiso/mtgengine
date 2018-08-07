"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WretchedBanquet extends UnimplementedCard {
  constructor (game) {
    super(game, "Wretched Banquet", "Conflux", "CON");
  }
}

module.exports = WretchedBanquet;
