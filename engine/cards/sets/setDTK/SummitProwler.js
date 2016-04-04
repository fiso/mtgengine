"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SummitProwler extends Card {
  constructor(game) {
    super(game, "Summit Prowler", "Dragons of Tarkir", "DTK");
  }
}

module.exports = SummitProwler;
