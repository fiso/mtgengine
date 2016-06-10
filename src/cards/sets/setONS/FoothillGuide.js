"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FoothillGuide extends UnimplementedCard {
  constructor (game) {
    super(game, "Foothill Guide", "Onslaught", "ONS");
  }
}

module.exports = FoothillGuide;
