"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NayaBattlemage extends UnimplementedCard {
  constructor (game) {
    super(game, "Naya Battlemage", "Shards of Alara", "ALA");
  }
}

module.exports = NayaBattlemage;
