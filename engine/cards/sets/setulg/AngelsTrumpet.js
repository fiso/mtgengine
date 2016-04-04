"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelsTrumpet extends UnimplementedCard {
  constructor(game) {
    super(game, "Angel's Trumpet", "Urza's Legacy", "ULG");
  }
}

module.exports = AngelsTrumpet;
