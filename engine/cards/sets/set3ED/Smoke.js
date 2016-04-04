"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SmokeBase = require("../setCED/Smoke.js");

class Smoke extends SmokeBase {
  constructor(game) {
    super(game, "Smoke", "Revised Edition", "3ED");
  }
}

module.exports = Smoke;
