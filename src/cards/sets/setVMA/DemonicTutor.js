"use strict";
const Constants = require ("../../../Constants");
const DemonicTutorBase = require("../setCED/DemonicTutor");

class DemonicTutor extends DemonicTutorBase {
  constructor (game) {
    super(game, "Demonic Tutor", "Vintage Masters", "VMA");
  }
}

module.exports = DemonicTutor;
