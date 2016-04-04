"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MindShatterBase = require("../setDPA/MindShatter.js");

class MindShatter extends MindShatterBase {
  constructor(game) {
    super(game, "Mind Shatter", "Morningtide", "MOR");
  }
}

module.exports = MindShatter;
