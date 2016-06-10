"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreenWard extends UnimplementedCard {
  constructor (game) {
    super(game, "Green Ward", "Collector's Edition", "CED");
  }
}

module.exports = GreenWard;
