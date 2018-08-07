"use strict";
const Constants = require ("../../../Constants");
const PhyrexianTotemBase = require("../setDDE/PhyrexianTotem");

class PhyrexianTotem extends PhyrexianTotemBase {
  constructor (game) {
    super(game, "Phyrexian Totem", "Time Spiral", "TSP");
  }
}

module.exports = PhyrexianTotem;
