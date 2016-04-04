"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RangersGuile extends Card {
  constructor(game) {
    super(game, "Ranger's Guile", "Innistrad", "ISD");
  }
}

module.exports = RangersGuile;
