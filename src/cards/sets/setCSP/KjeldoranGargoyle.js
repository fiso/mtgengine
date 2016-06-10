"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KjeldoranGargoyle extends UnimplementedCard {
  constructor (game) {
    super(game, "Kjeldoran Gargoyle", "Coldsnap", "CSP");
  }
}

module.exports = KjeldoranGargoyle;
