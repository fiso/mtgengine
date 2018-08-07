"use strict";
const Constants = require ("../../../Constants");
const MadProphetBase = require("../setSOI/MadProphet");

class MadProphet extends MadProphetBase {
  constructor (game) {
    super(game, "Mad Prophet", "Avacyn Restored", "AVR");
  }
}

module.exports = MadProphet;
