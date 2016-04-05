"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CalltoGlory extends UnimplementedCard {
  constructor(game) {
    super(game, "Call to Glory", "Champions of Kamigawa", "CHK");
  }
}

module.exports = CalltoGlory;
