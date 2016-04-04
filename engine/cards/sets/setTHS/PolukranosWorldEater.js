"use strict";
const Constants = require ("../../../Constants");
const PolukranosWorldEaterBase = require("../setDDL/PolukranosWorldEater");

class PolukranosWorldEater extends PolukranosWorldEaterBase {
  constructor(game) {
    super(game, "Polukranos, World Eater", "Theros", "THS");
  }
}

module.exports = PolukranosWorldEater;
