"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Aurochs extends UnimplementedCard {
  constructor (game) {
    super(game, "Aurochs", "Masters Edition II", "ME2");
  }
}

module.exports = Aurochs;
