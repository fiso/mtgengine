"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CallousOppressor extends UnimplementedCard {
  constructor (game) {
    super(game, "Callous Oppressor", "Onslaught", "ONS");
  }
}

module.exports = CallousOppressor;
