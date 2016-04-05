"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Thoughtleech extends UnimplementedCard {
  constructor(game) {
    super(game, "Thoughtleech", "Ice Age", "ICE");
  }
}

module.exports = Thoughtleech;
