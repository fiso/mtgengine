"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SilvercoatLionBase = require("../setM10/SilvercoatLion.js");

class SilvercoatLion extends SilvercoatLionBase {
  constructor(game) {
    super(game, "Silvercoat Lion", "Magic 2011", "M11");
  }
}

module.exports = SilvercoatLion;
