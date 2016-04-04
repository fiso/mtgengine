"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MightyLeapBase = require("../setDDO/MightyLeap.js");

class MightyLeap extends MightyLeapBase {
  constructor(game) {
    super(game, "Mighty Leap", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = MightyLeap;
