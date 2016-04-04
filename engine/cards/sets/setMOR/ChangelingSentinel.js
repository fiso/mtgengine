"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChangelingSentinel extends Card {
  constructor(game) {
    super(game, "Changeling Sentinel", "Morningtide", "MOR");
  }
}

module.exports = ChangelingSentinel;
