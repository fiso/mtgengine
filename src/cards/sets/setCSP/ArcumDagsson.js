"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcumDagsson extends UnimplementedCard {
  constructor(game) {
    super(game, "Arcum Dagsson", "Coldsnap", "CSP");
  }
}

module.exports = ArcumDagsson;
