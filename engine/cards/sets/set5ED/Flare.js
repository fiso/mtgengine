"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Flare extends UnimplementedCard {
  constructor(game) {
    super(game, "Flare", "Fifth Edition", "5ED");
  }
}

module.exports = Flare;
