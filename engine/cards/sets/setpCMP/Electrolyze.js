"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Electrolyze extends Card {
  constructor(game) {
    super(game, "Electrolyze", "Champs and States", "pCMP");
  }
}

module.exports = Electrolyze;
