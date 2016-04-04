"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SparkmageApprenticeBase = require("../setDDN/SparkmageApprentice.js");

class SparkmageApprentice extends SparkmageApprenticeBase {
  constructor(game) {
    super(game, "Sparkmage Apprentice", "Magic 2010", "M10");
  }
}

module.exports = SparkmageApprentice;
