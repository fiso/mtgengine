"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkSphere extends UnimplementedCard {
  constructor (game) {
    super(game, "Dark Sphere", "The Dark", "DRK");
  }
}

module.exports = DarkSphere;
