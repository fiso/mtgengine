"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NeedlebiteTrap extends UnimplementedCard {
  constructor (game) {
    super(game, "Needlebite Trap", "Zendikar", "ZEN");
  }
}

module.exports = NeedlebiteTrap;
