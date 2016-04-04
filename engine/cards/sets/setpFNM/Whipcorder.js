"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Whipcorder extends Card {
  constructor(game) {
    super(game, "Whipcorder", "Friday Night Magic", "pFNM");
  }
}

module.exports = Whipcorder;
