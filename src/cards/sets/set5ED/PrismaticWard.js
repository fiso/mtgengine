"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrismaticWard extends UnimplementedCard {
  constructor (game) {
    super(game, "Prismatic Ward", "Fifth Edition", "5ED");
  }
}

module.exports = PrismaticWard;
