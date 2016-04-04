"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChromeMoxBase = require("../setpGPX/ChromeMox.js");

class ChromeMox extends ChromeMoxBase {
  constructor(game) {
    super(game, "Chrome Mox", "Mirrodin", "MRD");
  }
}

module.exports = ChromeMox;
