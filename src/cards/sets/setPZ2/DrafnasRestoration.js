"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrafnasRestoration extends UnimplementedCard {
  constructor (game) {
    super(game, "Drafna's Restoration", "You Make the Cube", "PZ2");
  }
}

module.exports = DrafnasRestoration;
