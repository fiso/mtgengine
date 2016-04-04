"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VividMarshBase = require("../setC13/VividMarsh.js");

class VividMarsh extends VividMarshBase {
  constructor(game) {
    super(game, "Vivid Marsh", "Lorwyn", "LRW");
  }
}

module.exports = VividMarsh;
