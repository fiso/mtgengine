"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeasideCitadel extends UnimplementedCard {
  constructor(game) {
    super(game, "Seaside Citadel", "Commander 2013 Edition", "C13");
  }
}

module.exports = SeasideCitadel;
