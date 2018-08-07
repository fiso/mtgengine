"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhantasmalSphere extends UnimplementedCard {
  constructor (game) {
    super(game, "Phantasmal Sphere", "Alliances", "ALL");
  }
}

module.exports = PhantasmalSphere;
