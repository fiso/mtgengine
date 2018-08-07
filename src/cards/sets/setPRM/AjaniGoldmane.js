"use strict";
const Constants = require ("../../../Constants");
const AjaniGoldmaneBase = require("../setM11/AjaniGoldmane");

class AjaniGoldmane extends AjaniGoldmaneBase {
  constructor (game) {
    super(game, "Ajani Goldmane", "Magic Online Promos", "PRM");
  }
}

module.exports = AjaniGoldmane;
