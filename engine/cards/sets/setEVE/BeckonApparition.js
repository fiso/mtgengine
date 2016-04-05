"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BeckonApparition extends UnimplementedCard {
  constructor(game) {
    super(game, "Beckon Apparition", "Eventide", "EVE");
  }
}

module.exports = BeckonApparition;
