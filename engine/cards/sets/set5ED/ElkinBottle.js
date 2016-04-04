"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElkinBottleBase = require("../setDKM/ElkinBottle.js");

class ElkinBottle extends ElkinBottleBase {
  constructor(game) {
    super(game, "Elkin Bottle", "Fifth Edition", "5ED");
  }
}

module.exports = ElkinBottle;
