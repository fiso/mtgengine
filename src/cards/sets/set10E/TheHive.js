"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheHive extends UnimplementedCard {
  constructor (game) {
    super(game, "The Hive", "Tenth Edition", "10E");
  }
}

module.exports = TheHive;
