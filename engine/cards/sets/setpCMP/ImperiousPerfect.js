"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImperiousPerfect extends UnimplementedCard {
  constructor(game) {
    super(game, "Imperious Perfect", "Champs and States", "pCMP");
  }
}

module.exports = ImperiousPerfect;
