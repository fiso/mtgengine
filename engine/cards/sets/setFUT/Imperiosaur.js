"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Imperiosaur extends UnimplementedCard {
  constructor(game) {
    super(game, "Imperiosaur", "Future Sight", "FUT");
  }
}

module.exports = Imperiosaur;
