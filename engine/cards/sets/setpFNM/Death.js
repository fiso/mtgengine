"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeathBase = require("../setAPC/Death.js");

class Death extends DeathBase {
  constructor(game) {
    super(game, "Death", "Friday Night Magic", "pFNM");
  }
}

module.exports = Death;
