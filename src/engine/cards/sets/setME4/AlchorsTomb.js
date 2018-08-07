"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlchorsTomb extends UnimplementedCard {
  constructor (game) {
    super(game, "Alchor's Tomb", "Masters Edition IV", "ME4");
  }
}

module.exports = AlchorsTomb;
