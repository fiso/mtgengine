"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InquisitorsFlail extends UnimplementedCard {
  constructor(game) {
    super(game, "Inquisitor's Flail", "Innistrad", "ISD");
  }
}

module.exports = InquisitorsFlail;
