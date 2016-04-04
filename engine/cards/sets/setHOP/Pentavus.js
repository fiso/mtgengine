"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PentavusBase = require("../setC14/Pentavus.js");

class Pentavus extends PentavusBase {
  constructor(game) {
    super(game, "Pentavus", "Planechase", "HOP");
  }
}

module.exports = Pentavus;
