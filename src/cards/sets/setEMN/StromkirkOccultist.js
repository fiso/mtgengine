"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StromkirkOccultist extends UnimplementedCard {
  constructor (game) {
    super(game, "Stromkirk Occultist", "Eldritch Moon", "EMN");
  }
}

module.exports = StromkirkOccultist;
