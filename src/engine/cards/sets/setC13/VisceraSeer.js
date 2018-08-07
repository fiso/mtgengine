"use strict";
const Constants = require ("../../../Constants");
const VisceraSeerBase = require("../setPZ1/VisceraSeer");

class VisceraSeer extends VisceraSeerBase {
  constructor (game) {
    super(game, "Viscera Seer", "Commander 2013", "C13");
  }
}

module.exports = VisceraSeer;
