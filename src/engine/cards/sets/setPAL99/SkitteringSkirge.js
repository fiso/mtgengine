"use strict";
const Constants = require ("../../../Constants");
const SkitteringSkirgeBase = require("../setPRM/SkitteringSkirge");

class SkitteringSkirge extends SkitteringSkirgeBase {
  constructor (game) {
    super(game, "Skittering Skirge", "Arena League 1999", "PAL99");
  }
}

module.exports = SkitteringSkirge;
