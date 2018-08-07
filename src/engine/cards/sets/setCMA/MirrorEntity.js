"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MirrorEntity extends UnimplementedCard {
  constructor (game) {
    super(game, "Mirror Entity", "Commander Anthology", "CMA");
  }
}

module.exports = MirrorEntity;
