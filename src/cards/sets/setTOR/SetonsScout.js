"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SetonsScout extends UnimplementedCard {
  constructor(game) {
    super(game, "Seton's Scout", "Torment", "TOR");
  }
}

module.exports = SetonsScout;
