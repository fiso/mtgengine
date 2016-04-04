"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Jokulhaups extends Card {
  constructor(game) {
    super(game, "Jokulhaups", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Jokulhaups;
