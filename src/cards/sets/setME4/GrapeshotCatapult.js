"use strict";
const Constants = require ("../../../Constants");
const GrapeshotCatapultBase = require("../setATQ/GrapeshotCatapult");

class GrapeshotCatapult extends GrapeshotCatapultBase {
  constructor(game) {
    super(game, "Grapeshot Catapult", "Masters Edition IV", "ME4");
  }
}

module.exports = GrapeshotCatapult;
