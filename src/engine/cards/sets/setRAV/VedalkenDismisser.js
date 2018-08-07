"use strict";
const Constants = require ("../../../Constants");
const VedalkenDismisserBase = require("../setMMA/VedalkenDismisser");

class VedalkenDismisser extends VedalkenDismisserBase {
  constructor (game) {
    super(game, "Vedalken Dismisser", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = VedalkenDismisser;
