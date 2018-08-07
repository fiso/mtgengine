"use strict";
const Constants = require ("../../../Constants");
const GiselatheBrokenBladeBase = require("../setV17/GiselatheBrokenBlade");

class GiselatheBrokenBlade extends GiselatheBrokenBladeBase {
  constructor (game) {
    super(game, "Gisela, the Broken Blade", "Eldritch Moon", "EMN");
  }
}

module.exports = GiselatheBrokenBlade;
