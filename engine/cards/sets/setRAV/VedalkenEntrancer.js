"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VedalkenEntrancerBase = require("../setM13/VedalkenEntrancer.js");

class VedalkenEntrancer extends VedalkenEntrancerBase {
  constructor(game) {
    super(game, "Vedalken Entrancer", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = VedalkenEntrancer;
