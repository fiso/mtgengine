"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlyRequisitioner extends UnimplementedCard {
  constructor (game) {
    super(game, "Sly Requisitioner", "Aether Revolt", "AER");
  }
}

module.exports = SlyRequisitioner;
