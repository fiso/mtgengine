"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Heliophial extends UnimplementedCard {
  constructor (game) {
    super(game, "Heliophial", "Fifth Dawn", "5DN");
  }
}

module.exports = Heliophial;
