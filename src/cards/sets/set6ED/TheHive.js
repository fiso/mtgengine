"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheHive extends UnimplementedCard {
  constructor (game) {
    super(game, "The Hive", "Classic Sixth Edition", "6ED");
  }
}

module.exports = TheHive;
