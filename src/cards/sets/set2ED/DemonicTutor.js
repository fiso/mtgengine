"use strict";
const Constants = require ("../../../Constants");
const DemonicTutorBase = require("../setCED/DemonicTutor");

class DemonicTutor extends DemonicTutorBase {
  constructor(game) {
    super(game, "Demonic Tutor", "Unlimited Edition", "2ED");
  }
}

module.exports = DemonicTutor;
