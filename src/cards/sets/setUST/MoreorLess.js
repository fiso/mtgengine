"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoreorLess extends UnimplementedCard {
  constructor (game) {
    super(game, "More or Less", "Unstable", "UST");
  }
}

module.exports = MoreorLess;
