"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SyphonFlesh extends UnimplementedCard {
  constructor(game) {
    super(game, "Syphon Flesh", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = SyphonFlesh;
