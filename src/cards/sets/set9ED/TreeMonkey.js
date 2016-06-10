"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TreeMonkey extends UnimplementedCard {
  constructor (game) {
    super(game, "Tree Monkey", "Ninth Edition", "9ED");
  }
}

module.exports = TreeMonkey;
