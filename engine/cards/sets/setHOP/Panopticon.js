"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Panopticon extends UnimplementedCard {
  constructor(game) {
    super(game, "Panopticon", "Planechase", "HOP");
  }
}

module.exports = Panopticon;
