"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrismaticBoon extends UnimplementedCard {
  constructor (game) {
    super(game, "Prismatic Boon", "Mirage", "MIR");
  }
}

module.exports = PrismaticBoon;
