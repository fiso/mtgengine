"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmedResponse extends UnimplementedCard {
  constructor(game) {
    super(game, "Armed Response", "Fifth Dawn", "5DN");
  }
}

module.exports = ArmedResponse;
