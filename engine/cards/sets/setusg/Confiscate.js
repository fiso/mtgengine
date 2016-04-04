"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ConfiscateBase = require("../set8ED/Confiscate.js");

class Confiscate extends ConfiscateBase {
  constructor(game) {
    super(game, "Confiscate", "Urza's Saga", "USG");
  }
}

module.exports = Confiscate;
