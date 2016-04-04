"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FalsePeaceBase = require("../setPOR/FalsePeace.js");

class FalsePeace extends FalsePeaceBase {
  constructor(game) {
    super(game, "False Peace", "Starter 1999", "S99");
  }
}

module.exports = FalsePeace;
