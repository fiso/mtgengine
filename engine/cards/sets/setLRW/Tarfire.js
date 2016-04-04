"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TarfireBase = require("../setDD3_EVG/Tarfire.js");

class Tarfire extends TarfireBase {
  constructor(game) {
    super(game, "Tarfire", "Lorwyn", "LRW");
  }
}

module.exports = Tarfire;
