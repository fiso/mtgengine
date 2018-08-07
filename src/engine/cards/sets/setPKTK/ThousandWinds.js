"use strict";
const Constants = require ("../../../Constants");
const ThousandWindsBase = require("../setKTK/ThousandWinds");

class ThousandWinds extends ThousandWindsBase {
  constructor (game) {
    super(game, "Thousand Winds", "Khans of Tarkir Promos", "PKTK");
  }
}

module.exports = ThousandWinds;
