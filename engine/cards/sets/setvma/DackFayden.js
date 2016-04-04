"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DackFaydenBase = require("../setCNS/DackFayden.js");

class DackFayden extends DackFaydenBase {
  constructor(game) {
    super(game, "Dack Fayden", "Vintage Masters", "VMA");
  }
}

module.exports = DackFayden;
