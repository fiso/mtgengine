"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CeruleanWyvern extends UnimplementedCard {
  constructor (game) {
    super(game, "Cerulean Wyvern", "Mirage", "MIR");
  }
}

module.exports = CeruleanWyvern;
