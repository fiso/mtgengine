"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KjeldoranWarCry extends UnimplementedCard {
  constructor(game) {
    super(game, "Kjeldoran War Cry", "Coldsnap", "CSP");
  }
}

module.exports = KjeldoranWarCry;
