"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ConfiscateBase = require("../set8ED/Confiscate.js");

class Confiscate extends ConfiscateBase {
  constructor(game) {
    super(game, "Confiscate", "Seventh Edition", "7ED");
  }
}

module.exports = Confiscate;
