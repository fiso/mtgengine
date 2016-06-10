"use strict";
const Constants = require ("../../../Constants");
const DemonicTutorBase = require("../setCED/DemonicTutor");

class DemonicTutor extends DemonicTutorBase {
  constructor (game) {
    super(game, "Demonic Tutor", "Masters Edition IV", "ME4");
  }
}

module.exports = DemonicTutor;
