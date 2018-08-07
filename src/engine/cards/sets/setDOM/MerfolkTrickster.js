"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MerfolkTrickster extends UnimplementedCard {
  constructor (game) {
    super(game, "Merfolk Trickster", "Dominaria", "DOM");
  }
}

module.exports = MerfolkTrickster;
