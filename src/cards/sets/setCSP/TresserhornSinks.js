"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TresserhornSinks extends UnimplementedCard {
  constructor(game) {
    super(game, "Tresserhorn Sinks", "Coldsnap", "CSP");
  }
}

module.exports = TresserhornSinks;
