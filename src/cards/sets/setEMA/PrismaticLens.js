"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrismaticLens extends UnimplementedCard {
  constructor (game) {
    super(game, "Prismatic Lens", "Eternal Masters", "EMA");
  }
}

module.exports = PrismaticLens;
