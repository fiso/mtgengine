"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrandOssuary extends Card {
  constructor(game) {
    super(game, "Grand Ossuary", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = GrandOssuary;
