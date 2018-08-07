"use strict";
const Constants = require ("../../../Constants");
const VraskasContemptBase = require("../setXLN/VraskasContempt");

class VraskasContempt extends VraskasContemptBase {
  constructor (game) {
    super(game, "Vraska's Contempt", "Ixalan Promos", "PXLN");
  }
}

module.exports = VraskasContempt;
