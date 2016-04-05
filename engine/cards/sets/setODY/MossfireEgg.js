"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MossfireEgg extends UnimplementedCard {
  constructor(game) {
    super(game, "Mossfire Egg", "Odyssey", "ODY");
  }
}

module.exports = MossfireEgg;
