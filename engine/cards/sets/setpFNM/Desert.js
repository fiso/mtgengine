"use strict";
const Constants = require ("../../../Constants");
const DesertBase = require("../setARN/Desert");

class Desert extends DesertBase {
  constructor(game) {
    super(game, "Desert", "Friday Night Magic", "pFNM");
  }
}

module.exports = Desert;
