"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmberBeast extends UnimplementedCard {
  constructor (game) {
    super(game, "Ember Beast", "Battlebond", "BBD");
  }
}

module.exports = EmberBeast;
