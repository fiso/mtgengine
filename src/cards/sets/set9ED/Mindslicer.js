"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mindslicer extends UnimplementedCard {
  constructor(game) {
    super(game, "Mindslicer", "Ninth Edition", "9ED");
  }
}

module.exports = Mindslicer;
