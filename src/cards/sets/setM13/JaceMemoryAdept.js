"use strict";
const Constants = require ("../../../Constants");
const JaceMemoryAdeptBase = require("../setM12/JaceMemoryAdept");

class JaceMemoryAdept extends JaceMemoryAdeptBase {
  constructor(game) {
    super(game, "Jace, Memory Adept", "Magic 2013", "M13");
  }
}

module.exports = JaceMemoryAdept;
