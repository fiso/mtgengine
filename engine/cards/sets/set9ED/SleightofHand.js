"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SleightofHandBase = require("../setME4/SleightofHand.js");

class SleightofHand extends SleightofHandBase {
  constructor(game) {
    super(game, "Sleight of Hand", "Ninth Edition", "9ED");
  }
}

module.exports = SleightofHand;
