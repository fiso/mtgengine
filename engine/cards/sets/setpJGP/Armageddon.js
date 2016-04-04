"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArmageddonBase = require("../setATH/Armageddon.js");

class Armageddon extends ArmageddonBase {
  constructor(game) {
    super(game, "Armageddon", "Judge Gift Program", "pJGP");
  }
}

module.exports = Armageddon;
