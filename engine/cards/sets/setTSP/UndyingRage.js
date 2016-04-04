"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UndyingRageBase = require("../setDDL/UndyingRage.js");

class UndyingRage extends UndyingRageBase {
  constructor(game) {
    super(game, "Undying Rage", "Time Spiral", "TSP");
  }
}

module.exports = UndyingRage;
