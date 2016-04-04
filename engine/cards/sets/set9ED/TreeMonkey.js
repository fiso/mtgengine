"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TreeMonkey extends Card {
  constructor(game) {
    super(game, "Tree Monkey", "Ninth Edition", "9ED");
  }
}

module.exports = TreeMonkey;
