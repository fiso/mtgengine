"use strict";
const Constants = require ("../../../Constants");
const RitualoftheMachineBase = require("../setALL/RitualoftheMachine");

class RitualoftheMachine extends RitualoftheMachineBase {
  constructor(game) {
    super(game, "Ritual of the Machine", "Masters Edition II", "ME2");
  }
}

module.exports = RitualoftheMachine;
