"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AdrianaCaptainoftheGuard extends UnimplementedCard {
  constructor (game) {
    super(game, "Adriana, Captain of the Guard", "You Make the Cube", "PZ2");
  }
}

module.exports = AdrianaCaptainoftheGuard;
