"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VedalkenDismisserBase = require("../setMMA/VedalkenDismisser.js");

class VedalkenDismisser extends VedalkenDismisserBase {
  constructor(game) {
    super(game, "Vedalken Dismisser", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = VedalkenDismisser;
