"use strict";
const Constants = require ("../../../Constants");
const CrazedSkirgeBase = require("../setBRB/CrazedSkirge");

class CrazedSkirge extends CrazedSkirgeBase {
  constructor (game) {
    super(game, "Crazed Skirge", "Urza's Saga", "USG");
  }
}

module.exports = CrazedSkirge;
