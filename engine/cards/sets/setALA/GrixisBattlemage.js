"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrixisBattlemage extends UnimplementedCard {
  constructor(game) {
    super(game, "Grixis Battlemage", "Shards of Alara", "ALA");
  }
}

module.exports = GrixisBattlemage;
