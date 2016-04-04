"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GrapeshotCatapultBase = require("../setATQ/GrapeshotCatapult.js");

class GrapeshotCatapult extends GrapeshotCatapultBase {
  constructor(game) {
    super(game, "Grapeshot Catapult", "Seventh Edition", "7ED");
  }
}

module.exports = GrapeshotCatapult;
