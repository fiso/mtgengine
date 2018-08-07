"use strict";
const Constants = require ("../../../Constants");
const OmenspeakerBase = require("../setM19/Omenspeaker");

class Omenspeaker extends OmenspeakerBase {
  constructor (game) {
    super(game, "Omenspeaker", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = Omenspeaker;
