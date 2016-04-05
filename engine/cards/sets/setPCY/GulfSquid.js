"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GulfSquid extends UnimplementedCard {
  constructor(game) {
    super(game, "Gulf Squid", "Prophecy", "PCY");
  }
}

module.exports = GulfSquid;
