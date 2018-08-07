"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gleemox extends UnimplementedCard {
  constructor (game) {
    super(game, "Gleemox", "Magic Online Promos", "PRM");
  }
}

module.exports = Gleemox;
