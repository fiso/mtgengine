"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArdentMilitia extends Card {
  constructor(game) {
    super(game, "Ardent Militia", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ArdentMilitia;
