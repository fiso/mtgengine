"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TragicPoet extends UnimplementedCard {
  constructor (game) {
    super(game, "Tragic Poet", "Dominaria", "DOM");
  }
}

module.exports = TragicPoet;
