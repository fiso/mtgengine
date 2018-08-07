"use strict";
const Constants = require ("../../../Constants");
const AgentofMasksBase = require("../setMM3/AgentofMasks");

class AgentofMasks extends AgentofMasksBase {
  constructor (game) {
    super(game, "Agent of Masks", "Guildpact", "GPT");
  }
}

module.exports = AgentofMasks;
