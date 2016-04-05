"use strict";
const Constants = require ("../../../Constants");
const DemonicTutorBase = require("../setCED/DemonicTutor");

class DemonicTutor extends DemonicTutorBase {
  constructor(game) {
    super(game, "Demonic Tutor", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = DemonicTutor;
