"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Dromosaur extends Card {
  constructor(game) {
    super(game, "Dromosaur", "Urza's Saga", "USG");
  }
}

module.exports = Dromosaur;
