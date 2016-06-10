"use strict";
const Constants = require ("../../../Constants");
const VedalkenEntrancerBase = require("../setM13/VedalkenEntrancer");

class VedalkenEntrancer extends VedalkenEntrancerBase {
  constructor (game) {
    super(game, "Vedalken Entrancer", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = VedalkenEntrancer;
