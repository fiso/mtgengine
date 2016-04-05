"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MishrasBauble extends UnimplementedCard {
  constructor(game) {
    super(game, "Mishra's Bauble", "Coldsnap", "CSP");
  }
}

module.exports = MishrasBauble;
