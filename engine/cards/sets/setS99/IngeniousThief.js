"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IngeniousThiefBase = require("../setPOR/IngeniousThief.js");

class IngeniousThief extends IngeniousThiefBase {
  constructor(game) {
    super(game, "Ingenious Thief", "Starter 1999", "S99");
  }
}

module.exports = IngeniousThief;
