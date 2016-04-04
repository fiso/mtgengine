"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrapplerSpider extends UnimplementedCard {
  constructor(game) {
    super(game, "Grappler Spider", "Worldwake", "WWK");
  }
}

module.exports = GrapplerSpider;
