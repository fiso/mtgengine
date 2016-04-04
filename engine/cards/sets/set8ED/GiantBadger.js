"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiantBadger extends UnimplementedCard {
  constructor(game) {
    super(game, "Giant Badger", "Eighth Edition", "8ED");
  }
}

module.exports = GiantBadger;
