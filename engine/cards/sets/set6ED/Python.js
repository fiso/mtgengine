"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Python extends Card {
  constructor(game) {
    super(game, "Python", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Python;
