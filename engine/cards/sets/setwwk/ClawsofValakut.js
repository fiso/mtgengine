"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ClawsofValakutBase = require("../setDDG/ClawsofValakut.js");

class ClawsofValakut extends ClawsofValakutBase {
  constructor(game) {
    super(game, "Claws of Valakut", "Worldwake", "WWK");
  }
}

module.exports = ClawsofValakut;
