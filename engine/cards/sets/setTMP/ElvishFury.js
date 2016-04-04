"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishFury extends UnimplementedCard {
  constructor(game) {
    super(game, "Elvish Fury", "Tempest", "TMP");
  }
}

module.exports = ElvishFury;
