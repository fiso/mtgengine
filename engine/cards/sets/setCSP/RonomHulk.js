"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RonomHulk extends Card {
  constructor(game) {
    super(game, "Ronom Hulk", "Coldsnap", "CSP");
  }
}

module.exports = RonomHulk;
