"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrismaticCircle extends UnimplementedCard {
  constructor (game) {
    super(game, "Prismatic Circle", "Mirage", "MIR");
  }
}

module.exports = PrismaticCircle;
