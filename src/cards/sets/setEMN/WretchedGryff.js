"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WretchedGryff extends UnimplementedCard {
  constructor (game) {
    super(game, "Wretched Gryff", "Eldritch Moon", "EMN");
  }
}

module.exports = WretchedGryff;
