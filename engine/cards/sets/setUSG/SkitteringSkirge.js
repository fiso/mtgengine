"use strict";
const Constants = require ("../../../Constants");
const SkitteringSkirgeBase = require("../setpARL/SkitteringSkirge");

class SkitteringSkirge extends SkitteringSkirgeBase {
  constructor(game) {
    super(game, "Skittering Skirge", "Urza's Saga", "USG");
  }
}

module.exports = SkitteringSkirge;
