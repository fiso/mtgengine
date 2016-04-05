"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MikaeustheUnhallowed extends UnimplementedCard {
  constructor(game) {
    super(game, "Mikaeus, the Unhallowed", "Dark Ascension", "DKA");
  }
}

module.exports = MikaeustheUnhallowed;
