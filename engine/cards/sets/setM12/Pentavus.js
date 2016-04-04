"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PentavusBase = require("../setC14/Pentavus.js");

class Pentavus extends PentavusBase {
  constructor(game) {
    super(game, "Pentavus", "Magic 2012", "M12");
  }
}

module.exports = Pentavus;
