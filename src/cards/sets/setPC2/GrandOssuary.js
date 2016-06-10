"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrandOssuary extends UnimplementedCard {
  constructor (game) {
    super(game, "Grand Ossuary", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = GrandOssuary;
