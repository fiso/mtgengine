"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Provoke extends UnimplementedCard {
  constructor (game) {
    super(game, "Provoke", "Tempest Remastered", "TPR");
  }
}

module.exports = Provoke;
