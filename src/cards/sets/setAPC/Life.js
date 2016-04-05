"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Life extends UnimplementedCard {
  constructor(game) {
    super(game, "Life", "Apocalypse", "APC");
  }
}

module.exports = Life;
