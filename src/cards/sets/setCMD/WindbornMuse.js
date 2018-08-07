"use strict";
const Constants = require ("../../../Constants");
const WindbornMuseBase = require("../setC16/WindbornMuse");

class WindbornMuse extends WindbornMuseBase {
  constructor (game) {
    super(game, "Windborn Muse", "Commander 2011", "CMD");
  }
}

module.exports = WindbornMuse;
