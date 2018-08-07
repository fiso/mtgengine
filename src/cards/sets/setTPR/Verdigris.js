"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Verdigris extends UnimplementedCard {
  constructor (game) {
    super(game, "Verdigris", "Tempest Remastered", "TPR");
  }
}

module.exports = Verdigris;
