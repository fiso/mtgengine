"use strict";
const Constants = require ("../../../Constants");
const WildNacatlBase = require("../setDDH/WildNacatl");

class WildNacatl extends WildNacatlBase {
  constructor (game) {
    super(game, "Wild Nacatl", "Magic Online Promos", "PRM");
  }
}

module.exports = WildNacatl;
