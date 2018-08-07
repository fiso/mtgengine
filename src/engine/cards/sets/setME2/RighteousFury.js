"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RighteousFury extends UnimplementedCard {
  constructor (game) {
    super(game, "Righteous Fury", "Masters Edition II", "ME2");
  }
}

module.exports = RighteousFury;
