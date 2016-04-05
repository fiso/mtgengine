"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Irradiate extends UnimplementedCard {
  constructor(game) {
    super(game, "Irradiate", "Mirrodin", "MRD");
  }
}

module.exports = Irradiate;
