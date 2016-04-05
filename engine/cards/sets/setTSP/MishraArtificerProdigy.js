"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MishraArtificerProdigy extends UnimplementedCard {
  constructor(game) {
    super(game, "Mishra, Artificer Prodigy", "Time Spiral", "TSP");
  }
}

module.exports = MishraArtificerProdigy;
