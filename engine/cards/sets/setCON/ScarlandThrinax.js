"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScarlandThrinaxBase = require("../setC13/ScarlandThrinax.js");

class ScarlandThrinax extends ScarlandThrinaxBase {
  constructor(game) {
    super(game, "Scarland Thrinax", "Conflux", "CON");
  }
}

module.exports = ScarlandThrinax;
