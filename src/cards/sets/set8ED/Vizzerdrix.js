"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Vizzerdrix extends UnimplementedCard {
  constructor(game) {
    super(game, "Vizzerdrix", "Eighth Edition", "8ED");
  }
}

module.exports = Vizzerdrix;
