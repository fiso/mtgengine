"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GrapeshotCatapultBase = require("../setATQ/GrapeshotCatapult.js");

class GrapeshotCatapult extends GrapeshotCatapultBase {
  constructor(game) {
    super(game, "Grapeshot Catapult", "Masters Edition IV", "ME4");
  }
}

module.exports = GrapeshotCatapult;
