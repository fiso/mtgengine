"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArgivianArchaeologistBase = require("../setATQ/ArgivianArchaeologist.js");

class ArgivianArchaeologist extends ArgivianArchaeologistBase {
  constructor(game) {
    super(game, "Argivian Archaeologist", "Masters Edition", "MED");
  }
}

module.exports = ArgivianArchaeologist;
