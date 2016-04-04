"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VigorBase = require("../setDPA/Vigor.js");

class Vigor extends VigorBase {
  constructor(game) {
    super(game, "Vigor", "Lorwyn", "LRW");
  }
}

module.exports = Vigor;
