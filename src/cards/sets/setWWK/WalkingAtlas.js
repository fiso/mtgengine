"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WalkingAtlas extends UnimplementedCard {
  constructor(game) {
    super(game, "Walking Atlas", "Worldwake", "WWK");
  }
}

module.exports = WalkingAtlas;
