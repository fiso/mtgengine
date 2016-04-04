"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HerbalPoultice extends UnimplementedCard {
  constructor(game) {
    super(game, "Herbal Poultice", "Lorwyn", "LRW");
  }
}

module.exports = HerbalPoultice;
