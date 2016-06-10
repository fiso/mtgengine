"use strict";
const Constants = require ("../../../Constants");
const GrapeshotCatapultBase = require("../setATQ/GrapeshotCatapult");

class GrapeshotCatapult extends GrapeshotCatapultBase {
  constructor (game) {
    super(game, "Grapeshot Catapult", "Seventh Edition", "7ED");
  }
}

module.exports = GrapeshotCatapult;
