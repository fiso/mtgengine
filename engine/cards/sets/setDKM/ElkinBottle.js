"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElkinBottle extends Card {
  constructor(game) {
    super(game, "Elkin Bottle", "Deckmasters", "DKM");
  }
}

module.exports = ElkinBottle;
