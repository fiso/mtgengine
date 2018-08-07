"use strict";
const Constants = require ("../../../Constants");
const GrapeshotCatapultBase = require("../setME4/GrapeshotCatapult");

class GrapeshotCatapult extends GrapeshotCatapultBase {
  constructor (game) {
    super(game, "Grapeshot Catapult", "Antiquities", "ATQ");
  }
}

module.exports = GrapeshotCatapult;
