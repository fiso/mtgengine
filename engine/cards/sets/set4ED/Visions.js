"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Visions extends UnimplementedCard {
  constructor(game) {
    super(game, "Visions", "Fourth Edition", "4ED");
  }
}

module.exports = Visions;
