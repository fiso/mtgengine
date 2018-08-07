"use strict";
const Constants = require ("../../../Constants");
const WildNacatlBase = require("../setDDH/WildNacatl");

class WildNacatl extends WildNacatlBase {
  constructor (game) {
    super(game, "Wild Nacatl", "Friday Night Magic 2010", "F10");
  }
}

module.exports = WildNacatl;
