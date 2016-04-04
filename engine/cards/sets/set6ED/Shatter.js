"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Shatter extends Card {
  constructor(game) {
    super(game, "Shatter", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Shatter;
