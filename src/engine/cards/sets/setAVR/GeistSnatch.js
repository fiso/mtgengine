"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GeistSnatch extends UnimplementedCard {
  constructor (game) {
    super(game, "Geist Snatch", "Avacyn Restored", "AVR");
  }
}

module.exports = GeistSnatch;
