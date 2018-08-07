"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreenWard extends UnimplementedCard {
  constructor (game) {
    super(game, "Green Ward", "Fourth Edition", "4ED");
  }
}

module.exports = GreenWard;
