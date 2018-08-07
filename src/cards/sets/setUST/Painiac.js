"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Painiac extends UnimplementedCard {
  constructor (game) {
    super(game, "Painiac", "Unstable", "UST");
  }
}

module.exports = Painiac;
