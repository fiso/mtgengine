"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SewerRatsBase = require("../setBRB/SewerRats.js");

class SewerRats extends SewerRatsBase {
  constructor(game) {
    super(game, "Sewer Rats", "Mirage", "MIR");
  }
}

module.exports = SewerRats;
