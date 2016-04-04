"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OphidianBase = require("../setDD3_JVC/Ophidian.js");

class Ophidian extends OphidianBase {
  constructor(game) {
    super(game, "Ophidian", "Friday Night Magic", "pFNM");
  }
}

module.exports = Ophidian;
