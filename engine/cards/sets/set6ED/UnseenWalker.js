"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UnseenWalker extends Card {
  constructor(game) {
    super(game, "Unseen Walker", "Classic Sixth Edition", "6ED");
  }
}

module.exports = UnseenWalker;
