"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fireshrieker extends UnimplementedCard {
  constructor (game) {
    super(game, "Fireshrieker", "Conspiracy", "CNS");
  }
}

module.exports = Fireshrieker;
