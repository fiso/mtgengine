"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NantukoShaman extends Card {
  constructor(game) {
    super(game, "Nantuko Shaman", "Modern Masters", "MMA");
  }
}

module.exports = NantukoShaman;
