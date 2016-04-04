"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TopanAscetic extends Card {
  constructor(game) {
    super(game, "Topan Ascetic", "Shards of Alara", "ALA");
  }
}

module.exports = TopanAscetic;
