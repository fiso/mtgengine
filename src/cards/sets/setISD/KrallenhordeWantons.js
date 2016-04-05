"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrallenhordeWantons extends UnimplementedCard {
  constructor(game) {
    super(game, "Krallenhorde Wantons", "Innistrad", "ISD");
  }
}

module.exports = KrallenhordeWantons;
