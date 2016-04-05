"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JaggedPoppet extends UnimplementedCard {
  constructor(game) {
    super(game, "Jagged Poppet", "Dissension", "DIS");
  }
}

module.exports = JaggedPoppet;
