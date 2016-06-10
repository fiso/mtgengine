"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MassHysteria extends UnimplementedCard {
  constructor (game) {
    super(game, "Mass Hysteria", "Mirrodin", "MRD");
  }
}

module.exports = MassHysteria;
