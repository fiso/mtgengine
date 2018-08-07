"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NimShrieker extends UnimplementedCard {
  constructor (game) {
    super(game, "Nim Shrieker", "Mirrodin", "MRD");
  }
}

module.exports = NimShrieker;
