"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JaceMemoryAdeptBase = require("../setM12/JaceMemoryAdept.js");

class JaceMemoryAdept extends JaceMemoryAdeptBase {
  constructor(game) {
    super(game, "Jace, Memory Adept", "Media Inserts", "pMEI");
  }
}

module.exports = JaceMemoryAdept;
