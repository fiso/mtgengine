"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CalltoMind extends UnimplementedCard {
  constructor (game) {
    super(game, "Call to Mind", "Commander 2014", "C14");
  }
}

module.exports = CalltoMind;
