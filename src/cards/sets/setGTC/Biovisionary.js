"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Biovisionary extends UnimplementedCard {
  constructor (game) {
    super(game, "Biovisionary", "Gatecrash", "GTC");
  }
}

module.exports = Biovisionary;
