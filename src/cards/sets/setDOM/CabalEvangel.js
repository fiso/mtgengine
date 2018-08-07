"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CabalEvangel extends UnimplementedCard {
  constructor (game) {
    super(game, "Cabal Evangel", "Dominaria", "DOM");
  }
}

module.exports = CabalEvangel;
