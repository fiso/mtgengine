"use strict";
const Constants = require ("../../../Constants");
const RohgahhofKherKeepBase = require("../setLEG/RohgahhofKherKeep");

class RohgahhofKherKeep extends RohgahhofKherKeepBase {
  constructor (game) {
    super(game, "Rohgahh of Kher Keep", "Masters Edition III", "ME3");
  }
}

module.exports = RohgahhofKherKeep;
