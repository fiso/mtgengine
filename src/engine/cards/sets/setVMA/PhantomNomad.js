"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhantomNomad extends UnimplementedCard {
  constructor (game) {
    super(game, "Phantom Nomad", "Vintage Masters", "VMA");
  }
}

module.exports = PhantomNomad;
