"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dromosaur extends UnimplementedCard {
  constructor(game) {
    super(game, "Dromosaur", "Urza's Saga", "USG");
  }
}

module.exports = Dromosaur;
