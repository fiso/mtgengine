"use strict";
const Constants = require ("../../../Constants");
const TheMimeoplasmBase = require("../setCM1/TheMimeoplasm");

class TheMimeoplasm extends TheMimeoplasmBase {
  constructor (game) {
    super(game, "The Mimeoplasm", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = TheMimeoplasm;
