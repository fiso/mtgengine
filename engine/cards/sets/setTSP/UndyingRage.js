"use strict";
const Constants = require ("../../../Constants");
const UndyingRageBase = require("../setDDL/UndyingRage");

class UndyingRage extends UndyingRageBase {
  constructor(game) {
    super(game, "Undying Rage", "Time Spiral", "TSP");
  }
}

module.exports = UndyingRage;
