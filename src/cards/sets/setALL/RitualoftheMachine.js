"use strict";
const Constants = require ("../../../Constants");
const RitualoftheMachineBase = require("../setME2/RitualoftheMachine");

class RitualoftheMachine extends RitualoftheMachineBase {
  constructor (game) {
    super(game, "Ritual of the Machine", "Alliances", "ALL");
  }
}

module.exports = RitualoftheMachine;
