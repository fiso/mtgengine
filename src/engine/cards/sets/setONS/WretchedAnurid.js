"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WretchedAnurid extends UnimplementedCard {
  constructor (game) {
    super(game, "Wretched Anurid", "Onslaught", "ONS");
  }
}

module.exports = WretchedAnurid;
