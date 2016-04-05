"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReveredUnicorn extends UnimplementedCard {
  constructor(game) {
    super(game, "Revered Unicorn", "Weatherlight", "WTH");
  }
}

module.exports = ReveredUnicorn;
