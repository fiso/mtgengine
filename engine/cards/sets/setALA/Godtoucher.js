"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Godtoucher extends UnimplementedCard {
  constructor(game) {
    super(game, "Godtoucher", "Shards of Alara", "ALA");
  }
}

module.exports = Godtoucher;
