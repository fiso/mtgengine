"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShadowRift extends UnimplementedCard {
  constructor(game) {
    super(game, "Shadow Rift", "Tempest", "TMP");
  }
}

module.exports = ShadowRift;
