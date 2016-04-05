"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Okk extends UnimplementedCard {
  constructor(game) {
    super(game, "Okk", "Eighth Edition", "8ED");
  }
}

module.exports = Okk;
