"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RebufftheWicked extends UnimplementedCard {
  constructor (game) {
    super(game, "Rebuff the Wicked", "Planar Chaos", "PLC");
  }
}

module.exports = RebufftheWicked;
