"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DacksDuplicateBase = require("../setCNS/DacksDuplicate.js");

class DacksDuplicate extends DacksDuplicateBase {
  constructor(game) {
    super(game, "Dack's Duplicate", "Vintage Masters", "VMA");
  }
}

module.exports = DacksDuplicate;
