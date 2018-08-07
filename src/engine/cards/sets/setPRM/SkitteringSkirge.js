"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkitteringSkirge extends UnimplementedCard {
  constructor (game) {
    super(game, "Skittering Skirge", "Magic Online Promos", "PRM");
  }
}

module.exports = SkitteringSkirge;
