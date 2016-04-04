"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LotusVale extends Card {
  constructor(game) {
    super(game, "Lotus Vale", "Weatherlight", "WTH");
  }
}

module.exports = LotusVale;
