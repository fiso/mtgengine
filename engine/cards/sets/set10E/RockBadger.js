"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RockBadgerBase = require("../setMMQ/RockBadger.js");

class RockBadger extends RockBadgerBase {
  constructor(game) {
    super(game, "Rock Badger", "Tenth Edition", "10E");
  }
}

module.exports = RockBadger;
