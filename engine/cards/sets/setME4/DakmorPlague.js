"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DakmorPlague extends UnimplementedCard {
  constructor(game) {
    super(game, "Dakmor Plague", "Masters Edition IV", "ME4");
  }
}

module.exports = DakmorPlague;
