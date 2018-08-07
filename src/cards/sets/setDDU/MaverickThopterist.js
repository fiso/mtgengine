"use strict";
const Constants = require ("../../../Constants");
const MaverickThopteristBase = require("../setC18/MaverickThopterist");

class MaverickThopterist extends MaverickThopteristBase {
  constructor (game) {
    super(game, "Maverick Thopterist", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = MaverickThopterist;
