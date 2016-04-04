"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RitualoftheMachineBase = require("../setALL/RitualoftheMachine.js");

class RitualoftheMachine extends RitualoftheMachineBase {
  constructor(game) {
    super(game, "Ritual of the Machine", "Masters Edition II", "ME2");
  }
}

module.exports = RitualoftheMachine;
