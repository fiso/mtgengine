"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YawgmothDemon extends UnimplementedCard {
  constructor (game) {
    super(game, "Yawgmoth Demon", "Antiquities", "ATQ");
  }
}

module.exports = YawgmothDemon;
