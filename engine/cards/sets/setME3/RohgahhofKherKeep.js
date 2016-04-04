"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RohgahhofKherKeepBase = require("../setLEG/RohgahhofKherKeep.js");

class RohgahhofKherKeep extends RohgahhofKherKeepBase {
  constructor(game) {
    super(game, "Rohgahh of Kher Keep", "Masters Edition III", "ME3");
  }
}

module.exports = RohgahhofKherKeep;
