"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrudgeSentinel extends UnimplementedCard {
  constructor (game) {
    super(game, "Drudge Sentinel", "Dominaria", "DOM");
  }
}

module.exports = DrudgeSentinel;
