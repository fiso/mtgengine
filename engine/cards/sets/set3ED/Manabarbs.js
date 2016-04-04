"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ManabarbsBase = require("../set6ED/Manabarbs.js");

class Manabarbs extends ManabarbsBase {
  constructor(game) {
    super(game, "Manabarbs", "Revised Edition", "3ED");
  }
}

module.exports = Manabarbs;
