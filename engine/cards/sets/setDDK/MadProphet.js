"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MadProphetBase = require("../setAVR/MadProphet.js");

class MadProphet extends MadProphetBase {
  constructor(game) {
    super(game, "Mad Prophet", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = MadProphet;
