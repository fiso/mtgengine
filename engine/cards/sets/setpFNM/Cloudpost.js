"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Cloudpost extends Card {
  constructor(game) {
    super(game, "Cloudpost", "Friday Night Magic", "pFNM");
  }
}

module.exports = Cloudpost;
