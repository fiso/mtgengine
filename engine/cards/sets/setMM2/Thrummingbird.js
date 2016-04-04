"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Thrummingbird extends Card {
  constructor(game) {
    super(game, "Thrummingbird", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Thrummingbird;
