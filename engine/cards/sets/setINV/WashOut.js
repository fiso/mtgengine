"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WashOutBase = require("../setC13/WashOut.js");

class WashOut extends WashOutBase {
  constructor(game) {
    super(game, "Wash Out", "Invasion", "INV");
  }
}

module.exports = WashOut;
