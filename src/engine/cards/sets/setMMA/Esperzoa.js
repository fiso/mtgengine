"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Esperzoa extends UnimplementedCard {
  constructor (game) {
    super(game, "Esperzoa", "Modern Masters", "MMA");
  }
}

module.exports = Esperzoa;
