"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VisceraSeerBase = require("../setC13/VisceraSeer.js");

class VisceraSeer extends VisceraSeerBase {
  constructor(game) {
    super(game, "Viscera Seer", "Magic 2011", "M11");
  }
}

module.exports = VisceraSeer;
