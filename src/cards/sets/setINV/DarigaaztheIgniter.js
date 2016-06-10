"use strict";
const Constants = require ("../../../Constants");
const DarigaaztheIgniterBase = require("../setDDE/DarigaaztheIgniter");

class DarigaaztheIgniter extends DarigaaztheIgniterBase {
  constructor (game) {
    super(game, "Darigaaz, the Igniter", "Invasion", "INV");
  }
}

module.exports = DarigaaztheIgniter;
