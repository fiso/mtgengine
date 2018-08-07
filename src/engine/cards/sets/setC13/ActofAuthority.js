"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ActofAuthority extends UnimplementedCard {
  constructor (game) {
    super(game, "Act of Authority", "Commander 2013", "C13");
  }
}

module.exports = ActofAuthority;
