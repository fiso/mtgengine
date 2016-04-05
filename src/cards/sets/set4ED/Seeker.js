"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Seeker extends UnimplementedCard {
  constructor(game) {
    super(game, "Seeker", "Fourth Edition", "4ED");
  }
}

module.exports = Seeker;
