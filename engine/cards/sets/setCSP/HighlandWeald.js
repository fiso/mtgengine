"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HighlandWeald extends Card {
  constructor(game) {
    super(game, "Highland Weald", "Coldsnap", "CSP");
  }
}

module.exports = HighlandWeald;
