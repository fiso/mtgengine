"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Scrivener extends UnimplementedCard {
  constructor (game) {
    super(game, "Scrivener", "Tempest Remastered", "TPR");
  }
}

module.exports = Scrivener;
