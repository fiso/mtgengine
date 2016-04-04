"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EmptytheWarrensBase = require("../setMMA/EmptytheWarrens.js");

class EmptytheWarrens extends EmptytheWarrensBase {
  constructor(game) {
    super(game, "Empty the Warrens", "Time Spiral", "TSP");
  }
}

module.exports = EmptytheWarrens;
