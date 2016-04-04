"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TortureBase = require("../set5ED/Torture.js");

class Torture extends TortureBase {
  constructor(game) {
    super(game, "Torture", "Shadowmoor", "SHM");
  }
}

module.exports = Torture;
