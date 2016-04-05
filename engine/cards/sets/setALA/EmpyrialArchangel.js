"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmpyrialArchangel extends UnimplementedCard {
  constructor(game) {
    super(game, "Empyrial Archangel", "Shards of Alara", "ALA");
  }
}

module.exports = EmpyrialArchangel;
