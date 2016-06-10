"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HuntDown extends UnimplementedCard {
  constructor (game) {
    super(game, "Hunt Down", "Lorwyn", "LRW");
  }
}

module.exports = HuntDown;
