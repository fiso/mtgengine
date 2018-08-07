"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Inhumaniac extends UnimplementedCard {
  constructor (game) {
    super(game, "Inhumaniac", "Unstable", "UST");
  }
}

module.exports = Inhumaniac;
