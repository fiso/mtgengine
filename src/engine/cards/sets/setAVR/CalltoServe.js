"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CalltoServe extends UnimplementedCard {
  constructor (game) {
    super(game, "Call to Serve", "Avacyn Restored", "AVR");
  }
}

module.exports = CalltoServe;
