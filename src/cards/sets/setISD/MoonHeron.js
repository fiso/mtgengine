"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoonHeron extends UnimplementedCard {
  constructor (game) {
    super(game, "Moon Heron", "Innistrad", "ISD");
  }
}

module.exports = MoonHeron;
