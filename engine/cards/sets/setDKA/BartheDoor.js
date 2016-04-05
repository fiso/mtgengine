"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BartheDoor extends UnimplementedCard {
  constructor(game) {
    super(game, "Bar the Door", "Dark Ascension", "DKA");
  }
}

module.exports = BartheDoor;
