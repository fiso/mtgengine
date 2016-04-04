"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Parapet extends UnimplementedCard {
  constructor(game) {
    super(game, "Parapet", "Visions", "VIS");
  }
}

module.exports = Parapet;
