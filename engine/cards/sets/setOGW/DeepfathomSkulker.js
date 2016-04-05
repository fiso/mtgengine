"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeepfathomSkulker extends UnimplementedCard {
  constructor(game) {
    super(game, "Deepfathom Skulker", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = DeepfathomSkulker;
