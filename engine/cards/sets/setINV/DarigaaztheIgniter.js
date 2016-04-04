"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DarigaaztheIgniterBase = require("../setDDE/DarigaaztheIgniter.js");

class DarigaaztheIgniter extends DarigaaztheIgniterBase {
  constructor(game) {
    super(game, "Darigaaz, the Igniter", "Invasion", "INV");
  }
}

module.exports = DarigaaztheIgniter;
