"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreaterAuramancy extends UnimplementedCard {
  constructor(game) {
    super(game, "Greater Auramancy", "Shadowmoor", "SHM");
  }
}

module.exports = GreaterAuramancy;
