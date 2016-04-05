"use strict";
const Constants = require ("../../../Constants");
const GeistofSaintTraftBase = require("../setDDQ/GeistofSaintTraft");

class GeistofSaintTraft extends GeistofSaintTraftBase {
  constructor(game) {
    super(game, "Geist of Saint Traft", "World Magic Cup Qualifiers", "pWCQ");
  }
}

module.exports = GeistofSaintTraft;
