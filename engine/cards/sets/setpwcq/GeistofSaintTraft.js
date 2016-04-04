"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GeistofSaintTraftBase = require("../setDDQ/GeistofSaintTraft.js");

class GeistofSaintTraft extends GeistofSaintTraftBase {
  constructor(game) {
    super(game, "Geist of Saint Traft", "World Magic Cup Qualifiers", "pWCQ");
  }
}

module.exports = GeistofSaintTraft;
