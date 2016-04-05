"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnseenWalker extends UnimplementedCard {
  constructor(game) {
    super(game, "Unseen Walker", "Classic Sixth Edition", "6ED");
  }
}

module.exports = UnseenWalker;
