"use strict";
const Constants = require ("../../../Constants");
const WeeDragonautsBase = require("../setEMA/WeeDragonauts");

class WeeDragonauts extends WeeDragonautsBase {
  constructor (game) {
    super(game, "Wee Dragonauts", "Magic Online Promos", "PRM");
  }
}

module.exports = WeeDragonauts;
