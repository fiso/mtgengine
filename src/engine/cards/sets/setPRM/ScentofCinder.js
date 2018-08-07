"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScentofCinder extends UnimplementedCard {
  constructor (game) {
    super(game, "Scent of Cinder", "Magic Online Promos", "PRM");
  }
}

module.exports = ScentofCinder;
