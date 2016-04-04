"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RecumbentBlissBase = require("../setDDH/RecumbentBliss.js");

class RecumbentBliss extends RecumbentBlissBase {
  constructor(game) {
    super(game, "Recumbent Bliss", "Eventide", "EVE");
  }
}

module.exports = RecumbentBliss;
