"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Groundbreaker extends UnimplementedCard {
  constructor(game) {
    super(game, "Groundbreaker", "Champs and States", "pCMP");
  }
}

module.exports = Groundbreaker;
