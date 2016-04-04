"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChieftainenDal extends UnimplementedCard {
  constructor(game) {
    super(game, "Chieftain en-Dal", "Nemesis", "NMS");
  }
}

module.exports = ChieftainenDal;
