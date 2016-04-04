"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrismaticWardrobe extends Card {
  constructor(game) {
    super(game, "Prismatic Wardrobe", "Unglued", "UGL");
  }
}

module.exports = PrismaticWardrobe;
