"use strict";
const Constants = require ("../../../Constants");
const TormentedSoulBase = require("../setPCA/TormentedSoul");

class TormentedSoul extends TormentedSoulBase {
  constructor (game) {
    super(game, "Tormented Soul", "Wizards Play Network 2011", "PWP11");
  }
}

module.exports = TormentedSoul;
