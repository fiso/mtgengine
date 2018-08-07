"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mycoloth extends UnimplementedCard {
  constructor (game) {
    super(game, "Mycoloth", "Commander Anthology", "CMA");
  }
}

module.exports = Mycoloth;
