"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GOTOJAIL extends UnimplementedCard {
  constructor (game) {
    super(game, "GO TO JAIL", "Unstable", "UST");
  }
}

module.exports = GOTOJAIL;
