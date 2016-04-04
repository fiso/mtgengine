"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PolukranosWorldEaterBase = require("../setDDL/PolukranosWorldEater.js");

class PolukranosWorldEater extends PolukranosWorldEaterBase {
  constructor(game) {
    super(game, "Polukranos, World Eater", "Theros", "THS");
  }
}

module.exports = PolukranosWorldEater;
