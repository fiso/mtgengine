"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Browse extends UnimplementedCard {
  constructor (game) {
    super(game, "Browse", "Masters Edition II", "ME2");
  }
}

module.exports = Browse;
