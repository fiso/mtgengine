"use strict";
const Constants = require ("../../../Constants");
const RecklessScholarBase = require("../setBBD/RecklessScholar");

class RecklessScholar extends RecklessScholarBase {
  constructor (game) {
    super(game, "Reckless Scholar", "Zendikar", "ZEN");
  }
}

module.exports = RecklessScholar;
