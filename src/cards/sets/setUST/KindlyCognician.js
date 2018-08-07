"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KindlyCognician extends UnimplementedCard {
  constructor (game) {
    super(game, "Kindly Cognician", "Unstable", "UST");
  }
}

module.exports = KindlyCognician;
