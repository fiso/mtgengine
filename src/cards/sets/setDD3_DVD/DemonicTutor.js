"use strict";
const Constants = require ("../../../Constants");
const DemonicTutorBase = require("../setCED/DemonicTutor");

class DemonicTutor extends DemonicTutorBase {
  constructor (game) {
    super(game, "Demonic Tutor", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = DemonicTutor;
