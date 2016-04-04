"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KrosanWayfarer extends Card {
  constructor(game) {
    super(game, "Krosan Wayfarer", "Judgment", "JUD");
  }
}

module.exports = KrosanWayfarer;
