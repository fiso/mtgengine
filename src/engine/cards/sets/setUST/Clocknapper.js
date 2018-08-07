"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Clocknapper extends UnimplementedCard {
  constructor (game) {
    super(game, "Clocknapper", "Unstable", "UST");
  }
}

module.exports = Clocknapper;
