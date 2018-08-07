"use strict";
const Constants = require ("../../../Constants");
const DacksDuplicateBase = require("../setVMA/DacksDuplicate");

class DacksDuplicate extends DacksDuplicateBase {
  constructor (game) {
    super(game, "Dack's Duplicate", "Conspiracy", "CNS");
  }
}

module.exports = DacksDuplicate;
