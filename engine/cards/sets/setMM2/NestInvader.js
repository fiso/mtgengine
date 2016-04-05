"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NestInvader extends UnimplementedCard {
  constructor(game) {
    super(game, "Nest Invader", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = NestInvader;
