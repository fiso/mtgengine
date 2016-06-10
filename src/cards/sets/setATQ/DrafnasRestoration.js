"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrafnasRestoration extends UnimplementedCard {
  constructor (game) {
    super(game, "Drafna's Restoration", "Antiquities", "ATQ");
  }
}

module.exports = DrafnasRestoration;
