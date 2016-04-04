"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkullCatapultBase = require("../set6ED/SkullCatapult.js");

class SkullCatapult extends SkullCatapultBase {
  constructor(game) {
    super(game, "Skull Catapult", "Fifth Edition", "5ED");
  }
}

module.exports = SkullCatapult;
