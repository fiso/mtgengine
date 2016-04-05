"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RakishHeir extends UnimplementedCard {
  constructor(game) {
    super(game, "Rakish Heir", "Innistrad", "ISD");
  }
}

module.exports = RakishHeir;
