"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RumblingBaloth extends UnimplementedCard {
  constructor(game) {
    super(game, "Rumbling Baloth", "Magic 2014 Core Set", "M14");
  }
}

module.exports = RumblingBaloth;
