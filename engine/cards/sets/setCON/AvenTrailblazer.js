"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenTrailblazer extends UnimplementedCard {
  constructor(game) {
    super(game, "Aven Trailblazer", "Conflux", "CON");
  }
}

module.exports = AvenTrailblazer;
