"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PeppersmokeBase = require("../setLRW/Peppersmoke.js");

class Peppersmoke extends PeppersmokeBase {
  constructor(game) {
    super(game, "Peppersmoke", "Modern Masters", "MMA");
  }
}

module.exports = Peppersmoke;
