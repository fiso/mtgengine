"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KabiraCrossroadsBase = require("../setDDF/KabiraCrossroads.js");

class KabiraCrossroads extends KabiraCrossroadsBase {
  constructor(game) {
    super(game, "Kabira Crossroads", "Zendikar", "ZEN");
  }
}

module.exports = KabiraCrossroads;
