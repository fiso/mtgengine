"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HibernationsEnd extends Card {
  constructor(game) {
    super(game, "Hibernation's End", "Coldsnap", "CSP");
  }
}

module.exports = HibernationsEnd;
