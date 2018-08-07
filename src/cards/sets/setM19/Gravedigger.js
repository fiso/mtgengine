"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gravedigger extends UnimplementedCard {
  constructor (game) {
    super(game, "Gravedigger", "Core Set 2019", "M19");
  }
}

module.exports = Gravedigger;
