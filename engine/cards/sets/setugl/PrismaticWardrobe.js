"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrismaticWardrobe extends UnimplementedCard {
  constructor(game) {
    super(game, "Prismatic Wardrobe", "Unglued", "UGL");
  }
}

module.exports = PrismaticWardrobe;
