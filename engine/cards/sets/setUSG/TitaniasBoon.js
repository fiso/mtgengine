"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TitaniasBoon extends UnimplementedCard {
  constructor(game) {
    super(game, "Titania's Boon", "Urza's Saga", "USG");
  }
}

module.exports = TitaniasBoon;
