"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianIngester extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Ingester", "Eternal Masters", "EMA");
  }
}

module.exports = PhyrexianIngester;
