"use strict";
const Constants = require ("../../../Constants");
const EmptytheWarrensBase = require("../setDDS/EmptytheWarrens");

class EmptytheWarrens extends EmptytheWarrensBase {
  constructor (game) {
    super(game, "Empty the Warrens", "Modern Masters", "MMA");
  }
}

module.exports = EmptytheWarrens;
