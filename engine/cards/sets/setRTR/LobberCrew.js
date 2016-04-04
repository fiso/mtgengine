"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LobberCrew extends Card {
  constructor(game) {
    super(game, "Lobber Crew", "Return to Ravnica", "RTR");
  }
}

module.exports = LobberCrew;
