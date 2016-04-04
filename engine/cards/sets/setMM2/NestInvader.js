"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NestInvader extends Card {
  constructor(game) {
    super(game, "Nest Invader", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = NestInvader;
