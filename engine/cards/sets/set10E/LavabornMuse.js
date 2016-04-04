"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LavabornMuseBase = require("../setDDK/LavabornMuse.js");

class LavabornMuse extends LavabornMuseBase {
  constructor(game) {
    super(game, "Lavaborn Muse", "Tenth Edition", "10E");
  }
}

module.exports = LavabornMuse;
