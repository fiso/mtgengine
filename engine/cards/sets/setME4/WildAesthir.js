"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WildAesthirBase = require("../setALL/WildAesthir.js");

class WildAesthir extends WildAesthirBase {
  constructor(game) {
    super(game, "Wild Aesthir", "Masters Edition IV", "ME4");
  }
}

module.exports = WildAesthir;
