"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MeddleBase = require("../setMIR/Meddle.js");

class Meddle extends MeddleBase {
  constructor(game) {
    super(game, "Meddle", "Onslaught", "ONS");
  }
}

module.exports = Meddle;
