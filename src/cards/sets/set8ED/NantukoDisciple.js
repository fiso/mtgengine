"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NantukoDisciple extends UnimplementedCard {
  constructor (game) {
    super(game, "Nantuko Disciple", "Eighth Edition", "8ED");
  }
}

module.exports = NantukoDisciple;
