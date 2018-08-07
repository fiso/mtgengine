"use strict";
const Constants = require ("../../../Constants");
const FishBase = require("../setTA25/Fish");

class Fish extends FishBase {
  constructor (game) {
    super(game, "Fish", "Commander 2014 Tokens", "TC14");
  }
}

module.exports = Fish;
