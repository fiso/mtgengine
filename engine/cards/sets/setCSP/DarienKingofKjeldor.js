"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarienKingofKjeldor extends UnimplementedCard {
  constructor(game) {
    super(game, "Darien, King of Kjeldor", "Coldsnap", "CSP");
  }
}

module.exports = DarienKingofKjeldor;
