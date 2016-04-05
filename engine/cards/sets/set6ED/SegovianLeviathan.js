"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SegovianLeviathan extends UnimplementedCard {
  constructor(game) {
    super(game, "Segovian Leviathan", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SegovianLeviathan;
