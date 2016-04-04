"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SegovianLeviathan extends Card {
  constructor(game) {
    super(game, "Segovian Leviathan", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SegovianLeviathan;
