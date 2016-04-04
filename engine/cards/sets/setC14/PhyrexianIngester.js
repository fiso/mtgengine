"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianIngester extends UnimplementedCard {
  constructor(game) {
    super(game, "Phyrexian Ingester", "Commander 2014", "C14");
  }
}

module.exports = PhyrexianIngester;
