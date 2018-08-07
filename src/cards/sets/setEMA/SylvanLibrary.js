"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SylvanLibrary extends UnimplementedCard {
  constructor (game) {
    super(game, "Sylvan Library", "Eternal Masters", "EMA");
  }
}

module.exports = SylvanLibrary;
