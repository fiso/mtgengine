"use strict";
const Constants = require ("../../../Constants");
const ThousandWindsBase = require("../setDDN/ThousandWinds");

class ThousandWinds extends ThousandWindsBase {
  constructor(game) {
    super(game, "Thousand Winds", "Khans of Tarkir", "KTK");
  }
}

module.exports = ThousandWinds;
