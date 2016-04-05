"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DoublingChant extends UnimplementedCard {
  constructor(game) {
    super(game, "Doubling Chant", "Magic 2012", "M12");
  }
}

module.exports = DoublingChant;
