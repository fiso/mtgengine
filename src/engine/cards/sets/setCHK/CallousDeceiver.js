"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CallousDeceiver extends UnimplementedCard {
  constructor (game) {
    super(game, "Callous Deceiver", "Champions of Kamigawa", "CHK");
  }
}

module.exports = CallousDeceiver;
