"use strict";
const Constants = require ("../../../Constants");
const ArgivianArchaeologistBase = require("../setMED/ArgivianArchaeologist");

class ArgivianArchaeologist extends ArgivianArchaeologistBase {
  constructor (game) {
    super(game, "Argivian Archaeologist", "Antiquities", "ATQ");
  }
}

module.exports = ArgivianArchaeologist;
