"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElkinBottleBase = require("../setDKM/ElkinBottle.js");

class ElkinBottle extends ElkinBottleBase {
  constructor(game) {
    super(game, "Elkin Bottle", "Masters Edition II", "ME2");
  }
}

module.exports = ElkinBottle;
