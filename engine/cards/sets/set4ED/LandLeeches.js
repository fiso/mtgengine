"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LandLeeches extends UnimplementedCard {
  constructor(game) {
    super(game, "Land Leeches", "Fourth Edition", "4ED");
  }
}

module.exports = LandLeeches;
