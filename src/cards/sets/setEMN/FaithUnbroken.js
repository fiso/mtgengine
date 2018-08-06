"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FaithUnbroken extends UnimplementedCard {
  constructor (game) {
    super(game, "Faith Unbroken", "Eldritch Moon", "EMN");
  }
}

module.exports = FaithUnbroken;
