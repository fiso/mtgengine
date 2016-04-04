"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrazedSkirgeBase = require("../setBRB/CrazedSkirge.js");

class CrazedSkirge extends CrazedSkirgeBase {
  constructor(game) {
    super(game, "Crazed Skirge", "Urza's Saga", "USG");
  }
}

module.exports = CrazedSkirge;
