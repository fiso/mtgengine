"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrovikanMist extends UnimplementedCard {
  constructor(game) {
    super(game, "Krovikan Mist", "Coldsnap", "CSP");
  }
}

module.exports = KrovikanMist;
