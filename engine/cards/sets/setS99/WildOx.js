"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WildOxBase = require("../setME4/WildOx.js");

class WildOx extends WildOxBase {
  constructor(game) {
    super(game, "Wild Ox", "Starter 1999", "S99");
  }
}

module.exports = WildOx;
