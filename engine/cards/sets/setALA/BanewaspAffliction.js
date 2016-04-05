"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BanewaspAffliction extends UnimplementedCard {
  constructor(game) {
    super(game, "Banewasp Affliction", "Shards of Alara", "ALA");
  }
}

module.exports = BanewaspAffliction;
