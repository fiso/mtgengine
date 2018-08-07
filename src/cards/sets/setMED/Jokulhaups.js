"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Jokulhaups extends UnimplementedCard {
  constructor (game) {
    super(game, "Jokulhaups", "Masters Edition", "MED");
  }
}

module.exports = Jokulhaups;
