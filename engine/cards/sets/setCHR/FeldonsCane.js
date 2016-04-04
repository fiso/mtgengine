"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FeldonsCaneBase = require("../setATQ/FeldonsCane.js");

class FeldonsCane extends FeldonsCaneBase {
  constructor(game) {
    super(game, "Feldon's Cane", "Chronicles", "CHR");
  }
}

module.exports = FeldonsCane;
