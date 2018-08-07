"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrowStorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Crow Storm", "Unstable", "UST");
  }
}

module.exports = CrowStorm;
