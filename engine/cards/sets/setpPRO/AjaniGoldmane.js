"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AjaniGoldmaneBase = require("../setLRW/AjaniGoldmane.js");

class AjaniGoldmane extends AjaniGoldmaneBase {
  constructor(game) {
    super(game, "Ajani Goldmane", "Pro Tour", "pPRO");
  }
}

module.exports = AjaniGoldmane;
