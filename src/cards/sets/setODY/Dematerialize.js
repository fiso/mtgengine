"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dematerialize extends UnimplementedCard {
  constructor (game) {
    super(game, "Dematerialize", "Odyssey", "ODY");
  }
}

module.exports = Dematerialize;
