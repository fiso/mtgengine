"use strict";
const Constants = require ("../../../Constants");
const WrexialtheRisenDeepBase = require("../setCM2/WrexialtheRisenDeep");

class WrexialtheRisenDeep extends WrexialtheRisenDeepBase {
  constructor (game) {
    super(game, "Wrexial, the Risen Deep", "Worldwake", "WWK");
  }
}

module.exports = WrexialtheRisenDeep;
