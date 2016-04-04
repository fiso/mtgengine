"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DecoratedGriffin extends UnimplementedCard {
  constructor(game) {
    super(game, "Decorated Griffin", "Theros", "THS");
  }
}

module.exports = DecoratedGriffin;
