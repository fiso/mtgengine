"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WardofBones extends UnimplementedCard {
  constructor(game) {
    super(game, "Ward of Bones", "Eventide", "EVE");
  }
}

module.exports = WardofBones;
