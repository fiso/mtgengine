"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RecklessScholarBase = require("../setCNS/RecklessScholar.js");

class RecklessScholar extends RecklessScholarBase {
  constructor(game) {
    super(game, "Reckless Scholar", "Zendikar", "ZEN");
  }
}

module.exports = RecklessScholar;
