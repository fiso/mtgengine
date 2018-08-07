"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SungracePegasus extends UnimplementedCard {
  constructor (game) {
    super(game, "Sungrace Pegasus", "Magic 2015", "M15");
  }
}

module.exports = SungracePegasus;
