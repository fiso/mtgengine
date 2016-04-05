"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RampagingWerewolf extends UnimplementedCard {
  constructor(game) {
    super(game, "Rampaging Werewolf", "Innistrad", "ISD");
  }
}

module.exports = RampagingWerewolf;
