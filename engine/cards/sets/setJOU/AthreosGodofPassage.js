"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AthreosGodofPassage extends UnimplementedCard {
  constructor(game) {
    super(game, "Athreos, God of Passage", "Journey into Nyx", "JOU");
  }
}

module.exports = AthreosGodofPassage;
