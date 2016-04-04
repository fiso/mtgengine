"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScrivenerBase = require("../setEXO/Scrivener.js");

class Scrivener extends ScrivenerBase {
  constructor(game) {
    super(game, "Scrivener", "Vintage Masters", "VMA");
  }
}

module.exports = Scrivener;
