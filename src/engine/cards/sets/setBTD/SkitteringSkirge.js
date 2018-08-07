"use strict";
const Constants = require ("../../../Constants");
const SkitteringSkirgeBase = require("../setPRM/SkitteringSkirge");

class SkitteringSkirge extends SkitteringSkirgeBase {
  constructor (game) {
    super(game, "Skittering Skirge", "Beatdown Box Set", "BTD");
  }
}

module.exports = SkitteringSkirge;
