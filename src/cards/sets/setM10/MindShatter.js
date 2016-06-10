"use strict";
const Constants = require ("../../../Constants");
const MindShatterBase = require("../setDPA/MindShatter");

class MindShatter extends MindShatterBase {
  constructor (game) {
    super(game, "Mind Shatter", "Magic 2010", "M10");
  }
}

module.exports = MindShatter;
