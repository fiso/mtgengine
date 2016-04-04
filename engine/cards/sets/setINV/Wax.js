"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WaxBase = require("../setARC/Wax.js");

class Wax extends WaxBase {
  constructor(game) {
    super(game, "Wax", "Invasion", "INV");
  }
}

module.exports = Wax;
