"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gomazoa extends UnimplementedCard {
  constructor(game) {
    super(game, "Gomazoa", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Gomazoa;
