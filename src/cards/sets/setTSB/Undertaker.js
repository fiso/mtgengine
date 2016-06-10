"use strict";
const Constants = require ("../../../Constants");
const UndertakerBase = require("../setMMQ/Undertaker");

class Undertaker extends UndertakerBase {
  constructor (game) {
    super(game, "Undertaker", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = Undertaker;
