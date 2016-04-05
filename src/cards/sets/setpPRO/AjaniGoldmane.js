"use strict";
const Constants = require ("../../../Constants");
const AjaniGoldmaneBase = require("../setLRW/AjaniGoldmane");

class AjaniGoldmane extends AjaniGoldmaneBase {
  constructor(game) {
    super(game, "Ajani Goldmane", "Pro Tour", "pPRO");
  }
}

module.exports = AjaniGoldmane;
