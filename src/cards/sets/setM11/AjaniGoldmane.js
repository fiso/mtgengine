"use strict";
const Constants = require ("../../../Constants");
const AjaniGoldmaneBase = require("../setLRW/AjaniGoldmane");

class AjaniGoldmane extends AjaniGoldmaneBase {
  constructor (game) {
    super(game, "Ajani Goldmane", "Magic 2011", "M11");
  }
}

module.exports = AjaniGoldmane;
