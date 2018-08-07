"use strict";
const Constants = require ("../../../Constants");
const AustereCommandBase = require("../setIMA/AustereCommand");

class AustereCommand extends AustereCommandBase {
  constructor (game) {
    super(game, "Austere Command", "Lorwyn", "LRW");
  }
}

module.exports = AustereCommand;
