"use strict";
const Constants = require ("../../../Constants");
const WeeDragonautsBase = require("../setEMA/WeeDragonauts");

class WeeDragonauts extends WeeDragonautsBase {
  constructor (game) {
    super(game, "Wee Dragonauts", "Arena League 2006", "PAL06");
  }
}

module.exports = WeeDragonauts;
