"use strict";
const Constants = require ("../../../Constants");
const RecumbentBlissBase = require("../setDDH/RecumbentBliss");

class RecumbentBliss extends RecumbentBlissBase {
  constructor (game) {
    super(game, "Recumbent Bliss", "Eventide", "EVE");
  }
}

module.exports = RecumbentBliss;
