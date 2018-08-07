"use strict";
const Constants = require ("../../../Constants");
const DesertBase = require("../setV12/Desert");

class Desert extends DesertBase {
  constructor (game) {
    super(game, "Desert", "Magic Online Promos", "PRM");
  }
}

module.exports = Desert;
