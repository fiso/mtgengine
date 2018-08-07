"use strict";
const Constants = require ("../../../Constants");
const ThunderclapWyvernBase = require("../setEMA/ThunderclapWyvern");

class ThunderclapWyvern extends ThunderclapWyvernBase {
  constructor (game) {
    super(game, "Thunderclap Wyvern", "Magic Origins", "ORI");
  }
}

module.exports = ThunderclapWyvern;
