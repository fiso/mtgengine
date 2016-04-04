"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MindShatterBase = require("../setDPA/MindShatter.js");

class MindShatter extends MindShatterBase {
  constructor(game) {
    super(game, "Mind Shatter", "Magic 2010", "M10");
  }
}

module.exports = MindShatter;
