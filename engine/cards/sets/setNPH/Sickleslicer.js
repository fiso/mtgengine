"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SickleslicerBase = require("../setMM2/Sickleslicer.js");

class Sickleslicer extends SickleslicerBase {
  constructor(game) {
    super(game, "Sickleslicer", "New Phyrexia", "NPH");
  }
}

module.exports = Sickleslicer;
