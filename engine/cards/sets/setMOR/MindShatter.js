"use strict";
const Constants = require ("../../../Constants");
const MindShatterBase = require("../setDPA/MindShatter");

class MindShatter extends MindShatterBase {
  constructor(game) {
    super(game, "Mind Shatter", "Morningtide", "MOR");
  }
}

module.exports = MindShatter;
