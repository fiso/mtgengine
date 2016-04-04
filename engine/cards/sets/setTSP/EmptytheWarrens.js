"use strict";
const Constants = require ("../../../Constants");
const EmptytheWarrensBase = require("../setMMA/EmptytheWarrens");

class EmptytheWarrens extends EmptytheWarrensBase {
  constructor(game) {
    super(game, "Empty the Warrens", "Time Spiral", "TSP");
  }
}

module.exports = EmptytheWarrens;
