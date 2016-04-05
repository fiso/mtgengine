"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BravetheElements extends UnimplementedCard {
  constructor(game) {
    super(game, "Brave the Elements", "Commander 2014", "C14");
  }
}

module.exports = BravetheElements;
