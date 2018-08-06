"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CuriousHomunculus extends UnimplementedCard {
  constructor (game) {
    super(game, "Curious Homunculus", "Eldritch Moon", "EMN");
  }
}

module.exports = CuriousHomunculus;
