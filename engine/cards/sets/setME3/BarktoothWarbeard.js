"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BarktoothWarbeardBase = require("../setLEG/BarktoothWarbeard.js");

class BarktoothWarbeard extends BarktoothWarbeardBase {
  constructor(game) {
    super(game, "Barktooth Warbeard", "Masters Edition III", "ME3");
  }
}

module.exports = BarktoothWarbeard;
