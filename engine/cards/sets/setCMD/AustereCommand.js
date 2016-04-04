"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AustereCommandBase = require("../setLRW/AustereCommand.js");

class AustereCommand extends AustereCommandBase {
  constructor(game) {
    super(game, "Austere Command", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = AustereCommand;
