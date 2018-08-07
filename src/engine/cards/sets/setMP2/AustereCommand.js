"use strict";
const Constants = require ("../../../Constants");
const AustereCommandBase = require("../setIMA/AustereCommand");

class AustereCommand extends AustereCommandBase {
  constructor (game) {
    super(game, "Austere Command", "Amonkhet Invocations", "MP2");
  }
}

module.exports = AustereCommand;
