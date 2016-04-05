"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChimericSphere extends UnimplementedCard {
  constructor(game) {
    super(game, "Chimeric Sphere", "Weatherlight", "WTH");
  }
}

module.exports = ChimericSphere;
