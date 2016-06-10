"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RitualoftheMachine extends UnimplementedCard {
  constructor (game) {
    super(game, "Ritual of the Machine", "Alliances", "ALL");
  }
}

module.exports = RitualoftheMachine;
