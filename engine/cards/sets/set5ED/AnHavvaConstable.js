"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AnHavvaConstable extends UnimplementedCard {
  constructor(game) {
    super(game, "An-Havva Constable", "Fifth Edition", "5ED");
  }
}

module.exports = AnHavvaConstable;
