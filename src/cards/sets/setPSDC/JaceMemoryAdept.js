"use strict";
const Constants = require ("../../../Constants");
const JaceMemoryAdeptBase = require("../setM14/JaceMemoryAdept");

class JaceMemoryAdept extends JaceMemoryAdeptBase {
  constructor (game) {
    super(game, "Jace, Memory Adept", "San Diego Comic-Con 2013", "PSDC");
  }
}

module.exports = JaceMemoryAdept;
