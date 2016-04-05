"use strict";
const Constants = require ("../../../Constants");
const ArgivianArchaeologistBase = require("../setATQ/ArgivianArchaeologist");

class ArgivianArchaeologist extends ArgivianArchaeologistBase {
  constructor(game) {
    super(game, "Argivian Archaeologist", "Masters Edition", "MED");
  }
}

module.exports = ArgivianArchaeologist;
