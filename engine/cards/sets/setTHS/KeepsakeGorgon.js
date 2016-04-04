"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeepsakeGorgon extends UnimplementedCard {
  constructor(game) {
    super(game, "Keepsake Gorgon", "Theros", "THS");
  }
}

module.exports = KeepsakeGorgon;
