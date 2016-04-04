"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TheMimeoplasmBase = require("../setCM1/TheMimeoplasm.js");

class TheMimeoplasm extends TheMimeoplasmBase {
  constructor(game) {
    super(game, "The Mimeoplasm", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = TheMimeoplasm;
