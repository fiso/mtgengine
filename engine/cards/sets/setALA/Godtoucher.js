"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Godtoucher extends Card {
  constructor(game) {
    super(game, "Godtoucher", "Shards of Alara", "ALA");
  }
}

module.exports = Godtoucher;
