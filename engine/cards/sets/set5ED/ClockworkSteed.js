"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClockworkSteed extends UnimplementedCard {
  constructor(game) {
    super(game, "Clockwork Steed", "Fifth Edition", "5ED");
  }
}

module.exports = ClockworkSteed;
