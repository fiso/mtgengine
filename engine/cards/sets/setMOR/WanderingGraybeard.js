"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WanderingGraybeard extends UnimplementedCard {
  constructor(game) {
    super(game, "Wandering Graybeard", "Morningtide", "MOR");
  }
}

module.exports = WanderingGraybeard;
