"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NayaBattlemage extends Card {
  constructor(game) {
    super(game, "Naya Battlemage", "Shards of Alara", "ALA");
  }
}

module.exports = NayaBattlemage;
