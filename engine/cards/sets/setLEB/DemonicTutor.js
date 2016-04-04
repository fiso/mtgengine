"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DemonicTutorBase = require("../setCED/DemonicTutor.js");

class DemonicTutor extends DemonicTutorBase {
  constructor(game) {
    super(game, "Demonic Tutor", "Limited Edition Beta", "LEB");
  }
}

module.exports = DemonicTutor;
