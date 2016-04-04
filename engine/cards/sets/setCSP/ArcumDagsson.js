"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArcumDagsson extends Card {
  constructor(game) {
    super(game, "Arcum Dagsson", "Coldsnap", "CSP");
  }
}

module.exports = ArcumDagsson;
