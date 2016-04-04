"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EmpyrialArchangel extends Card {
  constructor(game) {
    super(game, "Empyrial Archangel", "Shards of Alara", "ALA");
  }
}

module.exports = EmpyrialArchangel;
