"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ViewfromAbove extends UnimplementedCard {
  constructor (game) {
    super(game, "View from Above", "Conflux", "CON");
  }
}

module.exports = ViewfromAbove;
