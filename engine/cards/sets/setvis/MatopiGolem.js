"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MatopiGolem extends UnimplementedCard {
  constructor(game) {
    super(game, "Matopi Golem", "Visions", "VIS");
  }
}

module.exports = MatopiGolem;
