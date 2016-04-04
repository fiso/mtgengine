"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArgothianSwine extends UnimplementedCard {
  constructor(game) {
    super(game, "Argothian Swine", "Urza's Saga", "USG");
  }
}

module.exports = ArgothianSwine;
