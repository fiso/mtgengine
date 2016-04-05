"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KithkinSpellduster extends UnimplementedCard {
  constructor(game) {
    super(game, "Kithkin Spellduster", "Eventide", "EVE");
  }
}

module.exports = KithkinSpellduster;
