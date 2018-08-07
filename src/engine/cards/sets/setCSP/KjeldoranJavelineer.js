"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KjeldoranJavelineer extends UnimplementedCard {
  constructor (game) {
    super(game, "Kjeldoran Javelineer", "Coldsnap", "CSP");
  }
}

module.exports = KjeldoranJavelineer;
