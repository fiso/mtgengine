"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TimetwisterBase = require("../setCED/Timetwister.js");

class Timetwister extends TimetwisterBase {
  constructor(game) {
    super(game, "Timetwister", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Timetwister;
