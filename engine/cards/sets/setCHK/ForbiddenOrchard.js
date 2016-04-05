"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForbiddenOrchard extends UnimplementedCard {
  constructor(game) {
    super(game, "Forbidden Orchard", "Champions of Kamigawa", "CHK");
  }
}

module.exports = ForbiddenOrchard;
