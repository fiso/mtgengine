"use strict";
const Constants = require ("../../../Constants");
const NivixAerieoftheFiremindBase = require("../setDDJ/NivixAerieoftheFiremind");

class NivixAerieoftheFiremind extends NivixAerieoftheFiremindBase {
  constructor (game) {
    super(game, "Nivix, Aerie of the Firemind", "Guildpact", "GPT");
  }
}

module.exports = NivixAerieoftheFiremind;
