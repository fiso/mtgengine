"use strict";
const Constants = require ("../../../Constants");
const AustereCommandBase = require("../setIMA/AustereCommand");

class AustereCommand extends AustereCommandBase {
  constructor (game) {
    super(game, "Austere Command", "Commander 2011", "CMD");
  }
}

module.exports = AustereCommand;
