"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlackWard extends UnimplementedCard {
  constructor(game) {
    super(game, "Black Ward", "Collector's Edition", "CED");
  }
}

module.exports = BlackWard;
