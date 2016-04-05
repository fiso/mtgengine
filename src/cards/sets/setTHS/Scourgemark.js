"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Scourgemark extends UnimplementedCard {
  constructor(game) {
    super(game, "Scourgemark", "Theros", "THS");
  }
}

module.exports = Scourgemark;
