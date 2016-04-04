"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EvilTwin extends UnimplementedCard {
  constructor(game) {
    super(game, "Evil Twin", "Innistrad", "ISD");
  }
}

module.exports = EvilTwin;
