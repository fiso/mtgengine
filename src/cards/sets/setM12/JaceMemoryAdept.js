"use strict";
const Constants = require ("../../../Constants");
const JaceMemoryAdeptBase = require("../setM14/JaceMemoryAdept");

class JaceMemoryAdept extends JaceMemoryAdeptBase {
  constructor (game) {
    super(game, "Jace, Memory Adept", "Magic 2012", "M12");
  }
}

module.exports = JaceMemoryAdept;
