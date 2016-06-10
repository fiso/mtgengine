"use strict";
const Constants = require ("../../../Constants");
const ClawsofValakutBase = require("../setDDG/ClawsofValakut");

class ClawsofValakut extends ClawsofValakutBase {
  constructor (game) {
    super(game, "Claws of Valakut", "Worldwake", "WWK");
  }
}

module.exports = ClawsofValakut;
