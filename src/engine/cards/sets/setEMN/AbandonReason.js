"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AbandonReason extends UnimplementedCard {
  constructor (game) {
    super(game, "Abandon Reason", "Eldritch Moon", "EMN");
  }
}

module.exports = AbandonReason;
