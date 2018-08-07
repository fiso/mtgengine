"use strict";
const Constants = require ("../../../Constants");
const BarktoothWarbeardBase = require("../setME3/BarktoothWarbeard");

class BarktoothWarbeard extends BarktoothWarbeardBase {
  constructor (game) {
    super(game, "Barktooth Warbeard", "Legends", "LEG");
  }
}

module.exports = BarktoothWarbeard;
