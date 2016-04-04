"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CommandofUnsummoning extends Card {
  constructor(game) {
    super(game, "Command of Unsummoning", "Portal", "POR");
  }
}

module.exports = CommandofUnsummoning;
