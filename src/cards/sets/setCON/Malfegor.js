"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Malfegor extends UnimplementedCard {
  constructor (game) {
    super(game, "Malfegor", "Conflux", "CON");
  }
}

module.exports = Malfegor;
