"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FistofSuns extends UnimplementedCard {
  constructor(game) {
    super(game, "Fist of Suns", "Fifth Dawn", "5DN");
  }
}

module.exports = FistofSuns;
