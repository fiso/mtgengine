"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CennsEnlistment extends UnimplementedCard {
  constructor(game) {
    super(game, "Cenn's Enlistment", "Eventide", "EVE");
  }
}

module.exports = CennsEnlistment;
