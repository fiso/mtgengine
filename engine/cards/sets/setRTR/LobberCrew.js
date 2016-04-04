"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LobberCrew extends UnimplementedCard {
  constructor(game) {
    super(game, "Lobber Crew", "Return to Ravnica", "RTR");
  }
}

module.exports = LobberCrew;
