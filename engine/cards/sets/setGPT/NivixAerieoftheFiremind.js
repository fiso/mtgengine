"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NivixAerieoftheFiremindBase = require("../setDDJ/NivixAerieoftheFiremind.js");

class NivixAerieoftheFiremind extends NivixAerieoftheFiremindBase {
  constructor(game) {
    super(game, "Nivix, Aerie of the Firemind", "Guildpact", "GPT");
  }
}

module.exports = NivixAerieoftheFiremind;
