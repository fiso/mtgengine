"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Index extends UnimplementedCard {
  constructor (game) {
    super(game, "Index", "Magic 2013", "M13");
  }
}

module.exports = Index;
