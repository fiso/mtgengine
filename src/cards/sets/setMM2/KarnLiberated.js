"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KarnLiberated extends UnimplementedCard {
  constructor(game) {
    super(game, "Karn Liberated", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = KarnLiberated;
