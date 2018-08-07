"use strict";
const Constants = require ("../../../Constants");
const SheoldredWhisperingOneBase = require("../setIMA/SheoldredWhisperingOne");

class SheoldredWhisperingOne extends SheoldredWhisperingOneBase {
  constructor (game) {
    super(game, "Sheoldred, Whispering One", "New Phyrexia", "NPH");
  }
}

module.exports = SheoldredWhisperingOne;
