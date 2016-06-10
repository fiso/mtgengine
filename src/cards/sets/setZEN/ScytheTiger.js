"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScytheTiger extends UnimplementedCard {
  constructor (game) {
    super(game, "Scythe Tiger", "Zendikar", "ZEN");
  }
}

module.exports = ScytheTiger;
