"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DampingSphere extends UnimplementedCard {
  constructor (game) {
    super(game, "Damping Sphere", "Dominaria", "DOM");
  }
}

module.exports = DampingSphere;
