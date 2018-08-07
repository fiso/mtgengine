"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Homunculus extends UnimplementedCard {
  constructor (game) {
    super(game, "Homunculus", "Innistrad Tokens", "TISD");
  }
}

module.exports = Homunculus;
