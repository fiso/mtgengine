"use strict";
const Constants = require ("../../../Constants");
const DemonicTutorBase = require("../setCED/DemonicTutor");

class DemonicTutor extends DemonicTutorBase {
  constructor (game) {
    super(game, "Demonic Tutor", "Limited Edition Beta", "LEB");
  }
}

module.exports = DemonicTutor;
