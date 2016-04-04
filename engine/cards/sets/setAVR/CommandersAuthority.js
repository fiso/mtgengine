"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CommandersAuthority extends UnimplementedCard {
  constructor(game) {
    super(game, "Commander's Authority", "Avacyn Restored", "AVR");
  }
}

module.exports = CommandersAuthority;
