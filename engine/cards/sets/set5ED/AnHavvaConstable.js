"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AnHavvaConstable extends Card {
  constructor(game) {
    super(game, "An-Havva Constable", "Fifth Edition", "5ED");
  }
}

module.exports = AnHavvaConstable;
