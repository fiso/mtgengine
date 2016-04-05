"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AkromasMemorial extends UnimplementedCard {
  constructor(game) {
    super(game, "Akroma's Memorial", "Future Sight", "FUT");
  }
}

module.exports = AkromasMemorial;
