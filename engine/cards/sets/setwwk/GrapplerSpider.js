"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrapplerSpider extends Card {
  constructor(game) {
    super(game, "Grappler Spider", "Worldwake", "WWK");
  }
}

module.exports = GrapplerSpider;
