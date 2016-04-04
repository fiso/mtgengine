"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrixisBattlemage extends Card {
  constructor(game) {
    super(game, "Grixis Battlemage", "Shards of Alara", "ALA");
  }
}

module.exports = GrixisBattlemage;
