"use strict";
const Constants = require ("../../../Constants");
const XathridNecromancerBase = require("../setM14/XathridNecromancer");

class XathridNecromancer extends XathridNecromancerBase {
  constructor (game) {
    super(game, "Xathrid Necromancer", "Magic Online Promos", "PRM");
  }
}

module.exports = XathridNecromancer;
