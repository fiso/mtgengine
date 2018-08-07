"use strict";
const Constants = require ("../../../Constants");
const MindShatterBase = require("../setMM3/MindShatter");

class MindShatter extends MindShatterBase {
  constructor (game) {
    super(game, "Mind Shatter", "Morningtide", "MOR");
  }
}

module.exports = MindShatter;
