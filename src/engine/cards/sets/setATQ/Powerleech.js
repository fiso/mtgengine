"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Powerleech extends UnimplementedCard {
  constructor (game) {
    super(game, "Powerleech", "Antiquities", "ATQ");
  }
}

module.exports = Powerleech;
