"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhantomNomad extends UnimplementedCard {
  constructor(game) {
    super(game, "Phantom Nomad", "Judgment", "JUD");
  }
}

module.exports = PhantomNomad;
