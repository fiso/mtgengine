"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Index extends UnimplementedCard {
  constructor (game) {
    super(game, "Index", "Apocalypse", "APC");
  }
}

module.exports = Index;
