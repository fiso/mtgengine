"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrzasFactory extends UnimplementedCard {
  constructor (game) {
    super(game, "Urza's Factory", "Champs and States", "pCMP");
  }
}

module.exports = UrzasFactory;
