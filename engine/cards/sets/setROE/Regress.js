"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RegressBase = require("../setMRD/Regress.js");

class Regress extends RegressBase {
  constructor(game) {
    super(game, "Regress", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Regress;
