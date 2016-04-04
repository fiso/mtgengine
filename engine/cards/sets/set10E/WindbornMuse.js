"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WindbornMuseBase = require("../setLGN/WindbornMuse.js");

class WindbornMuse extends WindbornMuseBase {
  constructor(game) {
    super(game, "Windborn Muse", "Tenth Edition", "10E");
  }
}

module.exports = WindbornMuse;
