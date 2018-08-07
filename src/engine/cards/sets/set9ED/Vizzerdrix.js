"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Vizzerdrix extends UnimplementedCard {
  constructor (game) {
    super(game, "Vizzerdrix", "Ninth Edition", "9ED");
  }
}

module.exports = Vizzerdrix;
