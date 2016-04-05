"use strict";
const Constants = require ("../../../Constants");
const DacksDuplicateBase = require("../setCNS/DacksDuplicate");

class DacksDuplicate extends DacksDuplicateBase {
  constructor(game) {
    super(game, "Dack's Duplicate", "Vintage Masters", "VMA");
  }
}

module.exports = DacksDuplicate;
