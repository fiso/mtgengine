"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VividMarshBase = require("../setC13/VividMarsh.js");

class VividMarsh extends VividMarshBase {
  constructor(game) {
    super(game, "Vivid Marsh", "Commander 2015", "C15");
  }
}

module.exports = VividMarsh;
