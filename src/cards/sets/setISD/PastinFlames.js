"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PastinFlames extends UnimplementedCard {
  constructor (game) {
    super(game, "Past in Flames", "Innistrad", "ISD");
  }
}

module.exports = PastinFlames;
