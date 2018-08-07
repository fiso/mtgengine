"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MountedArchers extends UnimplementedCard {
  constructor (game) {
    super(game, "Mounted Archers", "Tempest Remastered", "TPR");
  }
}

module.exports = MountedArchers;
