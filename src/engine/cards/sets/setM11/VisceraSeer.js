"use strict";
const Constants = require ("../../../Constants");
const VisceraSeerBase = require("../setPZ1/VisceraSeer");

class VisceraSeer extends VisceraSeerBase {
  constructor (game) {
    super(game, "Viscera Seer", "Magic 2011", "M11");
  }
}

module.exports = VisceraSeer;
