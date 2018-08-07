"use strict";
const Constants = require ("../../../Constants");
const KabiraCrossroadsBase = require("../setC17/KabiraCrossroads");

class KabiraCrossroads extends KabiraCrossroadsBase {
  constructor (game) {
    super(game, "Kabira Crossroads", "Zendikar", "ZEN");
  }
}

module.exports = KabiraCrossroads;
