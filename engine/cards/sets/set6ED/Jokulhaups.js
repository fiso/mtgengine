"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Jokulhaups extends UnimplementedCard {
  constructor(game) {
    super(game, "Jokulhaups", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Jokulhaups;
