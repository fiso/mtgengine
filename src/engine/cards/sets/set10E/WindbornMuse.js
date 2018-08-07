"use strict";
const Constants = require ("../../../Constants");
const WindbornMuseBase = require("../setC16/WindbornMuse");

class WindbornMuse extends WindbornMuseBase {
  constructor (game) {
    super(game, "Windborn Muse", "Tenth Edition", "10E");
  }
}

module.exports = WindbornMuse;
