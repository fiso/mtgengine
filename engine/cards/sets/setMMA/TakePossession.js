"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TakePossessionBase = require("../setFUT/TakePossession.js");

class TakePossession extends TakePossessionBase {
  constructor(game) {
    super(game, "Take Possession", "Modern Masters", "MMA");
  }
}

module.exports = TakePossession;
