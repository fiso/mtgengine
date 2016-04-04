"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Denied extends UnimplementedCard {
  constructor(game) {
    super(game, "Denied!", "Unglued", "UGL");
  }
}

module.exports = Denied;
