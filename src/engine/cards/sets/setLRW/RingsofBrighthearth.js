"use strict";
const Constants = require ("../../../Constants");
const RingsofBrighthearthBase = require("../setMPS/RingsofBrighthearth");

class RingsofBrighthearth extends RingsofBrighthearthBase {
  constructor (game) {
    super(game, "Rings of Brighthearth", "Lorwyn", "LRW");
  }
}

module.exports = RingsofBrighthearth;
