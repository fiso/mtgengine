"use strict";
const Constants = require ("../../../Constants");
const GerrardCapashenBase = require("../setDDE/GerrardCapashen");

class GerrardCapashen extends GerrardCapashenBase {
  constructor (game) {
    super(game, "Gerrard Capashen", "Apocalypse", "APC");
  }
}

module.exports = GerrardCapashen;
