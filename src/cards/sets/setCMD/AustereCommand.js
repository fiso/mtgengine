"use strict";
const Constants = require ("../../../Constants");
const AustereCommandBase = require("../setLRW/AustereCommand");

class AustereCommand extends AustereCommandBase {
  constructor(game) {
    super(game, "Austere Command", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = AustereCommand;
